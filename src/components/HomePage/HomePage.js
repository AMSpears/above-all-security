import React from 'react'

import DcImage from '../Img/washington_dc_picture.jpeg'
import PassionChurchLogo from '../Img/passion_city_church_logo.png'
import ContactForm from '../ContactForm/ContactForm'
import './HomePage.css'
import Content from "../Content.js"

const HomePage = () => {
  return (
    // Page content divided by sessions
    <div>
      <section id='intro'>
        <h1>{Content.introHeader}</h1>
        <p id='intro-details'>
          {Content.introDetails}
        </p>
      </section>
      <section id='image'>
            <section id="image">
                <img id="section-image" src={DcImage} alt="District of Columbia" width="100%" height="900px" />
            </section>
      </section>
      <a name='about-us'>
        <section id='about-us'>
          <h2>{Content.aboutUsHeader}</h2>
          <p id='aboutus-summary'> {Content.aboutUsSummary} </p>
        </section>
      </a>
      <a name='services'>
        <section id='services'>
          <h2>{Content.servicesHeader}</h2>
          <div className='container-details'>
            <div>
              <h3>{Content.services.serviceOneHeader}</h3>
              <p className='service-details'> {Content.services.serviceOneDetails} </p>
            </div>
            <div>
              <h3>{Content.services.serviceTwoHeader}</h3>
              <p className='service-details'> {Content.services.serviceTwoDetails}</p>
            </div>
            <div>
              <h3>{Content.services.serviceThreeHeader}</h3>
              <p className='service-details'> {Content.services.serviceThreeDetails} </p>
            </div>
            <div>
              <h3>{Content.services.serviceFourHeader}</h3>
              <p className='service-details'> {Content.services.serviceFourDetails}</p>
            </div>
            <div>
              <h3>{Content.services.serviceFiveHeader}</h3>
              <p className='service-details'> {Content.services.serviceFiveDetails} </p>
            </div>
            <div>
              <h3>{Content.services.serviceSixHeader}</h3>
              
              <p className='service-details'>{Content.services.serviceSixDetails}</p>
            </div>
            <div>
              <h3>{Content.services.serviceSevenHeader}</h3>
              <p className='service-details'>{Content.services.serviceSevenDetails}</p>
            </div>
          </div>
        </section>
      </a>
      <a name='contact-us'>
        <section id='contact-form'>
          <h2>Contact Us</h2>
          <ContactForm/> </section>
      </a>
      <section id='companies'>
        <h2>Companies we are working with</h2>
        <a href='https://passioncitychurch.com/' target='_blank'><img  id='company-1'  src={PassionChurchLogo} width='100px' height='100px' /></a>
      </section>
      <section id='footer'>
        <h2>Follow us in social media</h2>
        <div className='social-media'>
          <a id='instagram' href='https://www.instagram.com/aboveallsecurity/' target='_blank'><i class='fab fa-instagram'></i></a>
          <a id='facebook' href='https://www.facebook.com/aboveallyoursafety/?modal=admin_todo_tour' target='_blank'><i class='fab fa-facebook'></i></a>
          <a id='twitter' href='https://twitter.com/SecurityAbove' target='_blank'><i class='fab fa-twitter-square'></i></a>
        </div>
        <div className='copy-rights'>
          <p>
            © <a href='http://angiespears.com/' target='_blank'>Angie Spears</a>. All rights reserved. ©2018
          </p>
        </div>
      </section>
    </div>

  )
}

export default HomePage
