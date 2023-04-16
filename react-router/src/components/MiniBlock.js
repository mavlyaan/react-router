import React from "react"
import '../assets/style/Miniblock.scss'
class MiniBLock extends React.Component{ 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="block">
                <div className="title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="paragpraph">
                    <p>{this.props.paragraph}</p>
                </div>
                <div className="button">
                    <button>{this.props.button}</button>
                </div>
            </div>
        )
    }
}

export default MiniBLock