import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div class="navigation">
                <nav>
                    <ul>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Gmail</a></li>
                        <li><a href="#">Images</a></li>
                        <li><a href="#">User Logo</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
