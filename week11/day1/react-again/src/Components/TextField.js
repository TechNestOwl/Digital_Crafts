import React, { Component } from 'react'

export default class TextField extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            text: ""
        }
    }
    render() {
        return (
            <div>
                <form>
                <input placeholder="Enter text"></input>
                <button onClick={(e)=> this.setState({
                    text: e.target.value
                })}>Submit</button>
                </form>
                
            </div>
        )
    }
}
