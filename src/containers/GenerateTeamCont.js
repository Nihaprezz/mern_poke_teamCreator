import React, { useState } from "react"
const axios = require('axios');


const GenerateTeamContainer = (props) => {
    const [ team, setTeam ] = useState([])

    const generateNew = () => {
        axios.get('http://localhost:5000/teams/generate')
        .then(data => setTeam(data.data))
        .catch(err => console.log('the following error was caught: ', err))
        
    }


    return (
        <div>
            <h2>This is the GenreateTeamContainer</h2>

            <button onClick={() => generateNew()}>Generate</button>

            <h1>The team: {team}</h1>
        </div>
    
    )
}

export default GenerateTeamContainer
