import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        console.log(this.props.pokemon)
        const {hp,id,name} = this.props.pokemon
        return (
            <div>
                <p>{name}</p>
                <p>{hp}</p> 
                <p>{id}</p>
                
            </div>
        )
    }
}