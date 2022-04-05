import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
            <nav className="nav">
                <ul className="footer__nav">
                    <li className="footer__nav--item"><a href="!" className="footer__link">Find your dream home</a></li>
                    <li className="footer__nav--item"><a href="!" className="footer__link">request proposal</a></li>
                    <li className="footer__nav--item"><a href="!" className="footer__link">download home planner</a></li>
                    <li className="footer__nav--item"><a href="!" className="footer__link">contact us</a></li>
                    <li className="footer__nav--item"><a href="!" className="footer__link">Submit your property</a></li>
                    <li className="footer__nav--item"><a href="!" className="footer__link">come work with us!</a></li>
                </ul>
            </nav>
            <p className="footer__text">
                &copy; Copyright 2022 by JUNIOR FOLARIN and author Jonas Schmedtmann.Built on React Js and using Sass as the css preprocessor.
            </p>
    </footer>
  )
}

export default Footer