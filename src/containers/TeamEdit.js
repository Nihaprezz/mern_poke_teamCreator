import React, { useState, useEffect } from "react";
import PokemonEdit from "../components/PokemonEdit"
import SearchPokemon from "../components/SearchPokemon"

const axios = require('axios');
let backend = `http://localhost:5000`

const TeamEdit = (props) => {
    const [teaminfo, setTeaminfo] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [teamName, setTeamName] = useState("")


    useEffect(() => {
        axios.get(backend + `/teams/${props.teamId}`)
        .then(resp => {
            setTeaminfo(resp.data)
            setPokemon(resp.data.pokemons)
            setTeamName(resp.data.teamname)
        })
        .catch(error => console.log(error))
    },[props.teamId])  
    //without empty array it continues to fetch from the backend?

    const updateTeam = () => {
        let updatedTeam = {
            teamname: teamName, 
            pokemons: pokemon
        }
        
        axios.post(backend + `/teams/update/${teaminfo._id}`, updatedTeam) 
        .then(res => {
            console.log(res.data) //need to give a message to user with success
        })
        .catch(error => console.log(error)) 
    }

    const removeTeam = (pokeId) => {
        if(pokemon.length === 1){
            alert("Team needs to have at least 1 Pokemon!")
        } else {
           let updatedPokemons = [...pokemon].filter(pkm => pkm._id !== pokeId)
           setPokemon(updatedPokemons) 
        }
    }

    const addPkm = (pkmSprite) => {
        if(pokemon.length === 6) {
            alert('Team cannot exceed 6 Pokemon!')
        } else {
            let pkmObj = {}
            pkmObj["pokename"] = pkmSprite.split("xy/")[1].split('.gif')[0]
            pkmObj["pokegif"] = pkmSprite
        
            let updatedPokemons = [...pokemon, pkmObj]
            setPokemon(updatedPokemons)           
        }
    }

    const handleNameChange = (e) => {
        setTeamName(e.target.value)
    }
  
    return(
        <div>
            <h1>Team Edit </h1>

            <button onClick={() => updateTeam()}>Save Team</button>

            <hr></hr>

            <h1> Team Name: {teaminfo.teamname}</h1> 

            <label>Team Name</label>   
            <input type="text" value={teamName} onChange={(e) => handleNameChange(e)}></input>

            {pokemon.length !== 0 ? (
                 <div>
                   {pokemon.map(pkm => {
                       return (
                        < PokemonEdit key={pkm._id} pkmObj={pkm} remove={removeTeam}/>
                       )
                   })} 
                </div>
            ) : null}

            <hr></hr>
            
            < SearchPokemon addPkm={addPkm}/>

            <hr></hr>     
        </div>
    )
}

export default TeamEdit;