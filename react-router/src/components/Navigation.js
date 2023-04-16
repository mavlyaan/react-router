import React from "react"
import '../assets/style/Navigation.scss'

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="nav">
                <div className="nav-logo">
                    <img src={this.props.img} />
                </div>
                <div className="nav-title">
                    <h4>{this.props.title}</h4>
                </div>
                <div className="nav-desc">
                    <p>{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default Navigation