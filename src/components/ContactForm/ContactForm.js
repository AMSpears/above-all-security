import React from 'react'
import axios from 'axios'

import "./ContactForm.css"
//Contact form set up tutorials:
//https://www.youtube.com/watch?v=nF9g1825mwk
//https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448

class ContactForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value
        e.target.reset();
        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            }
        })
        .then((response) => {
            const elMsg = document.getElementById('msg')
            if (response.data.msg === 'success') {
                elMsg.innerHTML = "Thanks for reaching out! We recieved your message and will contact you shortly."
            } else if (response.data.msg === 'fail') {
                elMsg.innerHTML= "An error occurred when sending this message! Please try again or send us a direct message to hello@aboveallsecurity.com."
            }
        })
    }
    render(){
        return(
            <form id ='contact-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div id= "msg"> </div>
                <input 
                    id= "name" 
                    type = "text" 
                    name= "name" 
                    placeholder= "Full Name" 
                    required
                /> <br/>
                <input 
                    id= "email" 
                    type = "email" 
                    name= "email" 
                    placeholder= "Email Address" 
                    required 
                /><br/>
                <input 
                    id= "phone" 
                    type = "number" 
                    name= "phone" 
                    minLength= "9" 
                    placeholder= "Phone Number"
                /><br/>
                <input 
                    id= "subject" 
                    type= "text" 
                    name= "subject" 
                    maxLength= "40" 
                    placeholder= "Subject"
                /><br/>
                <textarea 
                    id= "message"  
                    name = "message" 
                    rows = "5" 
                    defaultValue= "How can we help you?" 
                    required
                /> <br/>
                <input 
                    type="submit" 
                    value="Send Message"
                />             
            </form>
        )
    }
}

export default ContactForm