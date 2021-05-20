import React, { Component } from 'react';
import "./cardContainer.css"
import CardContainer from "./CardContainer"

class Card extends Component {
        state = {
            flip: false
        }
        render() {
        <CardContainer />
        const {hp,id,name,sprites,} = this.props.pokemon
        const uppercased = name.toUpperCase()
        return (

            <div className="pokemon-card">
                <img  src={this.state.flip ?  sprites.back : sprites.front } alt="" />
                <h2>{uppercased}</h2>
                <p>HP: {hp}</p>             
                <p>Index: {id}</p>
                <button onClick={()=> this.setState({flip: !this.state.flip})}>Flip</button>              
            </div>
        );
    }
}

export default Card;