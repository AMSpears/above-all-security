import React from 'react'

import DcImage from "../Img/washington_dc_picture.jpeg"
import PassionChurchLogo from "../Img/passion_city_church_logo.png"
import ContactForm from "../ContactForm/ContactForm"
import "./HomePage.css"

const HomePage = () =>{
    return(
        // Page content divided by sessions
        <div>
            <section id = "intro">
                <h1>Above All Security, LLC</h1>
                <p id= "intro-details">Where ensuring your safety is our goal.<br/> We are currently serving the Northern Virginia and Washington DC area. </p>
            </section>
            <section id= "image">
                <img id= "section-image" src= {DcImage} alt= "District of Columbia" width= "100%" height = "900px"/>
            </section>
            <a name ="about-us">
            <section id= "about-us">
                <h2> About Us </h2>
                <p id="aboutus-summary">
                    Above All Security, LLC is a private security firm currently based in the Northern Virginia and Washington DC area. The experience of our security officers ranges from 10 to 20 years in law enforcement. We take pride in providing the best-personalized services to ensure 100%  of our client's security and satisfaction.  Our cored values are based on the importance of protecting not just our clients but our nation as a whole. If you like to learn more about the type of services we are currently providing, feel free to scroll down to our services section or contact us for more details.
                </p>
            </section>
            </a>
            <a name ="services">
            <section id= "services" >
                <h2>Our Services</h2>
                    <div className= "container-details">
                    <div>
                        <h3>Personal Protection</h3>
                        <p className="service-details"> 
                            Whether you are an executive, celebrity, athlete or just someone who in needs protection we offer both armed and unarmed protection.                         
                        </p>
                    </div>
                    <div>
                        <h3>Corporate Events</h3>
                        <p className="service-details"> 
                            From trade shows to shareholder meetings, our team of experience off-duty police officers can ensure your protection.  
                        </p>
                    </div>
                    <div>
                        <h3>Special Events</h3>
                        <p className="service-details"> 
                            Whether you need casual security for a birthday, wedding or just a private engagement, we have experienced armed and unarmed security guards ready to serve you in this capacity.                       
                        </p>
                    </div>
                    <div>
                        <h3>Armed & Unarmed</h3>
                        <p className="service-details"> 
                            Our experienced team of security officers is equipped to provide you with both armed and unarmed services. They are also preparer to dress according to the occasion whether in uniform, suit or just casual clothing.          
                        </p>
                    </div>
                    <div>
                        <h3>Residential Security</h3>
                        <p className="service-details"> 
                            Our experienced security officers also provide security for private homes, condos,  apartments and any other type of residential community. 
                        </p>
                    </div>
                    <div>
                        <h3>Facility/Building Security</h3>
                        <p className="service-details"> 
                            From churches to stores or clubs events we are ready to ensure the safety of those who gather there. Our experienced team is prepared to meet the needs of your facility.  
                        </p>
                    </div>
                    <div>
                        <h3>Background Investigation</h3>
                        <p className="service-details"> 
                            We offer background investigation services that can be as detail as you need from criminal history to employment screening to the individual's public records we got you covered. 
                        </p>
                    </div>
                    </div>
            </section>
            </a>
            <a name="contact-us">
            <section id= "contact-form">
                <h2>Contact Us</h2>
                <ContactForm/>
            </section>
            </a>
            <section id = "companies">
                <h2>Companies we are working with</h2>
                <a href = "https://passioncitychurch.com/" target= "_blank"> <img id= "company-1" src={PassionChurchLogo} width= "100px" height="100px" /></a>
            </section>
            <section id ="footer">
                <h2>Follow us in social media</h2>
            <div className ="social-media">
                <a id= "instagram" href= "https://www.instagram.com/aboveallsecurity/" target= "_blank"><i class="fab fa-instagram"></i> </a>
                <a id= "facebook" href= "https://www.facebook.com/aboveallyoursafety/?modal=admin_todo_tour" target= "_blank"><i class="fab fa-facebook"></i> </a>
                <a id= "twitter" href= "https://twitter.com/SecurityAbove" target= "_blank"><i class="fab fa-twitter-square"></i> </a>
            </div>
            <div className= "copy-rights">
                <p>© <a href="http://angiespears.com/" target= "_blank">Angie Spears</a>. All rights reserved. ©2018</p>
            </div>
            </section>
        </div>

    )
}

export default HomePage