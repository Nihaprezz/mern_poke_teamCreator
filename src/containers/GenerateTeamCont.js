import React, { useState } from "react"
import PokemonCard from "../components/PokemonCard"
const axios = require('axios');


const GenerateTeamContainer = () => {
    const [ team, setTeam ] = useState([])

    const generateNew = () => {
        axios.get('http://localhost:5000/teams/generate')
        .then(data => {
            setTeam(data.data)
        })
        .catch(err => console.log('the following error was caught: ', err))
        
    }


    return (
        <div>
            <h2>This is the GenreateTeamContainer</h2>

            <button onClick={() => generateNew()}>Generate</button>

            <div>
                {team.length === 0 ? null : (team.map((sprite, index) => {
                    return < PokemonCard key={index} sprite={sprite}/>
                }))}
            </div>
        </div>
    
    )
}

export default GenerateTeamContainer
