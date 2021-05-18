import React, { Component } from 'react';
import "./cardContainer.css"

class Card extends Component {
        state = {
            flip: false
        }
    render() {
        // console.log(this.props.pokemon)
        const {hp,id,name,sprites,} = this.props.pokemon
        
        return (
            <div className="pokemon-card">
                <img  src={this.state.flip ?  sprites.back : sprites.front } alt="" />
                <h2>{name}</h2>
                <p> {hp}</p>              
                <p> {id}</p>
                <button onClick={()=> this.setState({flip: !this.state.flip})}>Flip</button>              
            </div>
        );
    }
}

export default Card;