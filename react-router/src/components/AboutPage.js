import React from "react"
import Main from './Main'
import MiniBlock from './MiniBlock'
import Footer from './Footer'
import Block from './Block'
import '../assets/style/Block.scss'

class AboutPage extends React.Component{
    render(){
        return(
            <div className="about-container">
                <header>
                    <Main />
                </header>
                <section className="mini-blocks">
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                    <MiniBlock title='Lorem ipsum' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' button='button' />
                </section>
                <section className="block-desc">
                    <Block title='Lorem ipsum dolor sit amet' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    <Block title='Lorem ipsum dolor sit amet' paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                </section>
                <footer>
                    <Footer footer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                </footer>
            </div>
        )
    }
}

export default AboutPage