import React, { useState, useEffect } from 'react'
import './content.css'
const Content = () => {
	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		img: 'http://i.imgflip.com/1bij.jpg',
	})
	const [allMemes, setAllMemes] = React.useState([])
	useEffect(() => {
		async function getMemes() {
			const res = await fetch('https://api.imgflip.com/get_memes')
			const data = await res.json()
			setAllMemes(data.data.memes)
		}
		getMemes()
	}, [])
	function getMemeImage(event) {
		event.preventDefault()
		const memesArray = allMemes
		const randomNumber = Math.floor(Math.random() * memesArray.length)
		const url = memesArray[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme,
			img: url,
		}))
	}
	function changeText(event) {
		const { name, value } = event.target
		setMeme(prevData => {
			return {
				...prevData,
				[name]: value,
			}
		})
	}
	return (
		<div className='container content__container'>
			<form>
				<div className='content__inputs'>
					<input
						type='text'
						placeholder='Enter top text'
						className='content__input'
						value={meme.topText}
						name='topText'
						onChange={changeText}
					/>
					<input
						type='text'
						placeholder='Enter bottom text'
						className='content__input'
						value={meme.bottomText}
						name='bottomText'
						onChange={changeText}
					/>
				</div>
				<button className='content__button' onClick={getMemeImage}>
					Get a new meme image
				</button>
			</form>

			<div className='content__meme'>
				<p className='text top-text'>{meme.topText}</p>
				<img src={meme.img} alt='Meme' className='content__meme-img' />
				<p className='text bottom-text'>{meme.bottomText}</p>
			</div>
		</div>
	)
}

export default Content
