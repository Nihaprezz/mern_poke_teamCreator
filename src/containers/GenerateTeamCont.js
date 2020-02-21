import React, { useState } from "react"
import PokemonCard from "../components/PokemonCard"
const axios = require('axios');

let backend = `http://localhost:5000`

const GenerateTeamContainer = () => {
    const [ team, setTeam ] = useState([])

    const generateNew = () => {
        axios.get(backend + '/teams/generate')
        .then(response => setTeam(response.data))
        .catch(err => console.log('the following error was caught: ', err))
    }

    const saveTeam = () => {
        let teamname = 'serg'
        let pokemons = team.map(pkm => {
            return {
                pokename: pkm.split("xy/")[1].split('.gif')[0], 
                pokegif: pkm
            }
        })
        let newTeam = {
            teamname: teamname, 
            pokemons: pokemons
        }

        axios.post(backend + '/teams/add', newTeam)
        .then(res => console.log("Team Added! ", res.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            
            <button onClick={() => generateNew()}>Generate</button>

            <div>
                {team.map((sprite, index) => {
                    return < PokemonCard key={index} sprite={sprite}/>
                })}
            </div>
            
            {team.length === 0 ? <h2>Click the Generate button!</h2> : <button onClick={saveTeam}>Save Team</button>}
            
        </div>
    
    )
}

export default GenerateTeamContainer
