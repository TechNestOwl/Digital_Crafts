import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Count.js</h1>
                <p>This is the count: {this.state.count}</p>
                <button onClick={()=> this.setState({
                    count: this.state.count + 1
                })}>Add</button>
                <button onClick={()=> this.setState({
                    count: this.state.count - 1
                })}>Subtract</button>
            </div>
        );
    }
}

