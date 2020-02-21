import React, { useState, useEffect } from "react";
import PokemonEdit from "../components/PokemonEdit"

const axios = require('axios');
let backend = `http://localhost:5000`

const TeamEdit = (props) => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        axios.get(backend + `/teams/${props.teamId}`)
        .then(resp => setTeam(resp.data))
        .catch(error => console.log(error))
    },[])  
    //without empty array it continues to fetch from the backend?

    const removeTeam = (pokeId) => {
        console.log('attempting to remove this pokemon', pokeId)
        console.log('current team: ', team.pokemons)
        let updatedPokemons = [...team.pokemons].filter(pkm => pkm._id !== pokeId)
        console.log(updatedPokemons)
        team.pokemons = updatedPokemons
        console.log(team.pokemons )
        setTeam(team)

        //WHEN TEAM IS UPDATING, REACT IS NOT RE-RENDERING....
    }
  
    return(
        <div>
            <h1>Team Edit </h1>
            <h1> Team Name: {team.teamname}</h1>

            {team.pokemons ? (
                 <div>
                   {team.pokemons.map(pkm => {
                       return (
                        < PokemonEdit key={pkm._id} pkmObj={pkm} remove={removeTeam}/>
                       )
                   })} 
                </div>
            ) : null}

        </div>
    )
}

export default TeamEdit;