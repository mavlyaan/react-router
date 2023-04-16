import React from "react"
import '../assets/style/Footer.scss'
class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="footer-info">
                <h3>{this.props.footer}</h3>
            </div>
        )
    }
}

export default Footer