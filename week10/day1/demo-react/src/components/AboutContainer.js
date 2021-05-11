import React, { Component } from 'react'
import AboutMe from "./AboutMe";
import "../App.css"

export default class AbutContainer extends Component {
    render() {
        return (
            <div class="AboutContainer">
                <p>About Container</p>
                
                    <AboutMe />
            </div>
        )
    }
}
