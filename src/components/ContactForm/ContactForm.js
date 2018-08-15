import React from 'react'
import axios from 'axios'
import "./ContactForm.css"
//Contact form set up tutorials:
//https://www.youtube.com/watch?v=nF9g1825mwk
//https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448

class ContactForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3001/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                 alert("Message Sent!")
                 // reference https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields for reset function
                this.myFormRef.reset();
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send. Try again!")
            }
        })
    }

    render(){
        return(
            <form ref={(el) => this.myFormRef = el} id ='contact-form' onSubmit={this.handleSubmit.bind(this)} method="POST">
                <input id= "name" type = "text" name= "name" placeholder= "Full Name" required/><br/>
                <input id= "email" type = "email" name= "email" placeholder= "Email Address" required /><br/>
                <textarea id= "message" name = "message" rows = "5" placeholder= "How can we help you?" required> </textarea><br/>
                <input type="submit" value="Send Message"/>             
            </form>
        )
    }
}

export default ContactForm