import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
    state = {
        searchCriteria: "",
        newPokemonName: "",
        newPokemonHP: "",
        loading: false,
    
    }

    
   
   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })
        }
        
                
        // CreatePokemonCard = () => {
        //     const initalForm  = Object.freeze({
        //         newPokemonName: "",
        //         newPokemonHP:"",
                
        //     })
        //     const [formData, updateInitialForm] = React.useState(updateInitialForm)
        //     const handlechange = (e) => {
        //         updateInitialForm({
        //             [e.target.newPokemonName]: e.target.value
        //          //    console.log(newPokemonName)
        //         });
            
        //     };
        // };

        handleInputFormValues = (event) => {
            this.setState({
              [event.target.name]: event.target.value,
            });
          };
          
        handleSubmit = (e) => {
            e.preventDefault();
            const newPokeCard = []
            this.setState({
                loading: true,
              });
              let { newPokemonName, newPokemonHP } = this.state;
              console.log(newPokemonName, newPokemonHP);
              newPokeCard.push(newPokemonName,newPokemonHP);
              console.log(newPokeCard);

            //   const formSubmissionData = {
            //     restaurantName: firstName + lastName,
            //   };
              // the state variable that is your pokemon list
              // {hp: , name: sprites: { front: , back:}}
              // comment out if you want to see supabase
              // you will need to add your own url and api key
              // const { data, error } = await supabase
              //   .from("restaurants")
              //   .insert([formSubmissionData]);
              setTimeout(
                () =>
                  this.setState({
                    loading: false,
                  }),
                4000
              );
            };
            
            render() {
        
                const {pokemonData} = this.props
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon
        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input className="create-field" type="text" name="newPokemonName" placeholder="New Pokemon Name" value={this.state.newPokemonName} onChange={this.handleInputFormValues}/>
                        <input className="create-field" type="text" name="newPokemonHP" placeholder="New Pokemon HP" value={this.state.newPokemonHP} onChange={this.handleInputFormValues}/>
                        {/* <input className="create-field" type="text" name="fontURl" placeholder="Enter front URL" onChange={handleFormChange}/>
                        <input className="create-field" type="text" name="backURL" placeholder="Enter back URL" onChange={handleFormChange}/> */}
                        <button className="create-button" type="submit">Create</button>
                    </form>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )};
                </div>
                
            </div>
        );
    };
};
    
    
    
    export default CardContainer;