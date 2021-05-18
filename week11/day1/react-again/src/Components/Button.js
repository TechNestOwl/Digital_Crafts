import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            greeting: "Hello World"
        };
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    alert(this.state.greeting)}}
                >Don't Click Me</button>
            </div>
        )
    }
};

