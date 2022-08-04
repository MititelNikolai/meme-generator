import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.svg'
const Header = () => {
	return (
		<div className='container header__container'>
			<div className='header__logo'>
				<img src={LOGO} alt='TrollFace' className='header__logo-img' />
				<h2 className='header__logo-title'>Meme Generator</h2>
			</div>
			<p className='header__description'>React Course - Project 3</p>
		</div>
	)
}

export default Header
