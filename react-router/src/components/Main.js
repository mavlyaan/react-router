import React from "react"
import '../assets/style/Main.scss'
import strategy from '../assets/image/strategy.png'

class Main extends React.Component{

    // constructor(props){
    //     super(props)
    // }

    render(){
        return(
            <section className="main">
                <div className="info">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="image">
                    <img src={strategy}/>
                </div>
            </section>
        )
    }
}

export default Main