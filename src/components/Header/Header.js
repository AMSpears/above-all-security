import React from 'react'

import Logo from "../Img/above_all_security_logo.png"
import "./Header.css"

const Header = () =>{
    return(
        <div className="nav-container">
            <ul id="main-nav">
                <a id="logo" href= "/"><img src= {Logo} width= "120px" height= "110px" alt="logo"/></a>
                <div className="links">
                    <li><a href="/" className="nav-links">Home</a></li>
                    <li><a href="#about-us" className="nav-links">About Us</a></li>
                    <li><a href="#services" className="nav-links">Services</a></li>
                    <li><a href="#contact-us" className="nav-links">Contact Us</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Header