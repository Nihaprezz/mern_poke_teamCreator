import React, { useState } from "react"
import PokemonCard from "../components/PokemonCard"
import "../styles/Home.css"

const axios = require('axios');
let backend = `http://localhost:5000`

const GenerateTeamContainer = () => {
    const [ team, setTeam ] = useState([])
    const [ name, setName ] = useState('')  

    const generateNew = () => {
        axios.get(backend + '/teams/generate')
        .then(response => setTeam(response.data))
        .catch(err => console.log('the following error was caught: ', err))
    }

    const saveTeam = () => {
        let teamname = name ? name : 'PokeTeam'
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

    const handleTeamname = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="home-screen">
            
            <button onClick={() => generateNew()}>Generate</button>
                            
            {team.length !== 0 ? (
                <div>
                    <label>Team Name </label>
                    <input type="text" onChange={(e) =>  handleTeamname(e)}></input>
                </div>
            ): null}
 
            <div className="pokemon-cards">
                {team.map((sprite, index) => {
                    return < PokemonCard key={index} sprite={sprite}/>
                })}
            </div>
            
            {team.length === 0 ? <h2>Click the Generate button!</h2> : <button onClick={saveTeam}>Save Team</button>}
            
        </div>
    
    )
}

export default GenerateTeamContainer
