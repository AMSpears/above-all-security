import React from 'react'
import DcImage from "../Img/washington_dc_picture.jpeg"
import ContactForm from "../ContactForm/ContactForm"
import "./HomePage.css"

const HomePage = () =>{
    return(
        <div>
            <section id = "intro">
                <h1>Above All Security</h1>
                <p> Serving the community in washington DC...Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </section>
            <section id= "image">
                <img src= {DcImage} alt= "DC Image" width= "100%" height = "600px"/>
            </section>
            <section id= "about-us">
                <h2 id= "about-us"> About Us </h2>
                <p id="text-2"> Lorem Ipsum is simply dummy text of the printing and<br/>
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer <br/>
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting,<br/>
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum 
                </p>
            </section>
            <section id= "services" >
                <h2>Our Services</h2>
                <div className= "main-container">
                    <div className= "container-details">
                        <h3>Guard</h3>
                          <p id="service-1"> Lorem Ipsum is simply dummy text of the printing and <br/>
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book. 
                         </p>
                    </div>
                    <div className= "container-details">
                        <h3>Security</h3>
                        <p id= "service-2"> Lorem Ipsum is simply dummy text of the printing and <br/>
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className = "container-details">
                        <h3>Hospital</h3>
                        <p id= "service-3"> Lorem Ipsum is simply dummy text of the printing and <br/>
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </section>
            <section id= "contact-form">
                <h2>Contact Us</h2>
                <ContactForm/>
            </section>
        </div>

    )
}

export default HomePage