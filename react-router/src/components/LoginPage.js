import React from "react"
import '../assets/style/Login.scss'
import facebook from '../assets/image/fb.png'
import google from '../assets/image/google.png'
import vk from '../assets/image/vk.png'
import Footer from './Footer'

class LoginPage extends React.Component{
    render(){
        return(
            <div className="login-container">
                <section className="login">
                    <div className="login-main">
                    <form className="login-form">
                        <h2>Login</h2>
                        <input placeholder="email or phone number" />
                        <input placeholder="password" type="password" />
                        <button>button</button>
                    </form>
                    <div className="login-links">
                        <h4>Sign up with</h4>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href="https://google.com">
                                        <img src={facebook} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://google.com">
                                        <img src={google} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://google.com">
                                        <img src={vk} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </section>
                <footer>
                    <Footer footer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </footer>
            </div>
        )
    }
}

export default LoginPage