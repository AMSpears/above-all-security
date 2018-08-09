import React from 'react'

import Logo from "../Img/above_all_security_logo.png"
import "./Header.css"

const Header = () =>{
    return(
    <div>
        <nav className = "scrollNavs">
            <a href= "/"> <img id= "logo" src={Logo} alt= "Above All Security"/></a>
            <a id = "home" href="/" >Home</a>
            <a id= "about" href= "#">About Us</a>
            <a id= "services" href="#">Services</a>
            <a id= "contact" href= "#">Contact Us</a>
        </nav>
    </div>
    )
}

export default Header