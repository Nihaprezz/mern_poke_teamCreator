import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard";
const pokemonGif = require('pokemon-gif');

const SearchPokemon = (props) => {
    const [searchTxt, setSearchTxt] = useState('')
    const [newPkm, setNewPkm] = useState('')

    const handleChange = (e) => { setSearchTxt(e.target.value)}
    
    const searchGifs = (e) => {
        e.preventDefault();
        let newPkm;
    
        try {
            newPkm = pokemonGif(`${searchTxt}`) 
            setNewPkm(newPkm)
        }
        catch(err){
            console.log(err)
            setNewPkm('Pokemon Not Found. Search Again?')
        } 
    }   

    return (
        <div> 
            <form onSubmit={(e) =>  searchGifs(e)}>
                <label>Search Pokemon</label>
                <input type="text" name="pokemon" onChange={(e) => handleChange(e)} ></input>
                <input type="submit"></input>
            </form>
                
            <div>
            {newPkm.includes('sprites') ? (
                <div>
                    < PokemonCard sprite={newPkm}/>
                    <button onClick={() =>  props.addPkm(newPkm)}>Add to Team</button>
                </div>
            ) : newPkm}
            </div>
        </div>
    )
}

export default SearchPokemon