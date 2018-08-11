import React from 'react'

import Logo from "../Img/above_all_security_logo.png"
import "./Header.css"

const Header = () =>{
    return(
        <ul>
            <a id="logo" href= "/"><img src= {Logo} width= "80px" height= "80px"/></a>
            <li><a href= "/">Home</a></li>
            <li><a href= "#">About Us</a></li>
            <li><a href= "#">Services</a></li>
            <li><a href= "#">Contact Us</a></li>
        </ul>
    )
}

export default Header