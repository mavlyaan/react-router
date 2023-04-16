import React from "react"
import Main from "./Main"
import Navigation from "./Navigation"
import '../assets/style/Navigation.scss'
import location from '../assets/image/location.png'
import phone from '../assets/image/phone.png'
import telegram from '../assets/image/telegram.png'
import mail from '../assets/image/mail.png'
import '../assets/style/Contact.scss'
import Footer from "./Footer"

class ContactPage extends React.Component{
    render(){
        return(
            <div className="contact-container">
                <header>
                    <Main />
                </header>
                <section className="navbar">
                    <Navigation img={location} title='Our Office' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    <Navigation img={phone} title='Phone Number' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    <Navigation img={telegram} title='Telegram' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    <Navigation img={mail} title='Email' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                </section>
                <section className="contact-window">
                    <div>
                        <form className="contact-us">
                        <h2>Contact Us</h2>
                        <input placeholder="Enter your Name" />
                        <input placeholder="Enter your email address" />
                        <input/>
                        </form>
                    </div>
                </section>
                <footer>
                    <Footer footer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </footer>
            </div>
        )
    }
}

export default ContactPage