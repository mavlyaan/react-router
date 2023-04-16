import React from "react"
import '../assets/style/Block.scss'

class Block extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="blocks">
                <h2>{this.props.title}</h2>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}

export default Block