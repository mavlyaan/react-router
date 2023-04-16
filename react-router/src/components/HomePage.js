import React from "react"
import '../assets/style/HomePage.scss'
import Main from '../components/Main'
import MiniBlock from '../components/MiniBlock'
import Footer from './Footer'
class HomePage extends React.Component{
    render(){
        return(
            <div className="home-container">
                <header>
                <Main />
                </header>
                <section className="home-info">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                        <button>button</button>
                </section>
                <section className="mini-blocks">
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                </section>
                <footer>
                    <Footer footer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </footer>
            </div>
        )
    }
}

export default HomePage