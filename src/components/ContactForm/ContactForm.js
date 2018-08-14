import React from 'react'
import "./ContactForm.css"

class ContactForm extends React.Component {
    render(){
        return(
            <form action= "" method = "POST">
               
                <input type = "text" name= "name" placeholder= "First Name" required/><br/>
            
                <input type = "text" name= "lastname" placeholder= "Last Name"/><br/>
             
                <input type = "text" name= "email" placeholder= "Email Address" required /><br/>
              
                <input type = "text" name= "number" placeholder= "Phone Number" minLength= "9"/><br/>
             
                <textarea name = "message" rows = "5" cols= "50" placeholder= "How can we help you?" required >How can we help you? </textarea><br/>

                <input type="submit" value="Send Message"/>           
                
                </form>
        )
    }
}

export default ContactForm