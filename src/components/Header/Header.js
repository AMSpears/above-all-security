import React from 'react'

import Logo from "../Img/above_all_security_logo.png"
import "./Header.css"

const Header = () =>{
    return(
        <ul>
            <a id="logo" href= "/"><img src= {Logo} width= "80px" height= "80px"/></a>
            <li><a href= "/">Home</a></li>
            <li><a href= "#about-us">About Us</a></li>
            <li><a href= "#services">Services</a></li>
            <li><a href= "#contact-us">Contact Us</a></li>
        </ul>
    )
}

export default Header