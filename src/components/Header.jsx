import React from 'react'
import logo from '../assets/logo.png'
import bbc from '../assets/logo-bbc.png'
import bi from '../assets/logo-bi.png'
import forbes from '../assets/logo-forbes.png'
import tech from '../assets/logo-techcrunch.png'

const Header = () => {
  return (
    <header className="header">
        <img src={logo} alt="company logo" className="header__logo" />
        <h3 className="heading-3">your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">VIEW OUR PROPERTIES</button>

        <div className="asseenon">As seen on</div>
        <div className="asseenon__logo">
            <img src={bbc} alt="logo-bbc" />
            <img src={forbes} alt="logo-forbes" />
            <img src={tech} alt="logo-tech" />
            <img src={bi} alt="logo-bi" />
        </div>
    </header>
  )
}

export default Header