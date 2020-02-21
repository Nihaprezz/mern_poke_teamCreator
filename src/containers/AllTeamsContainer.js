import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import PokemonTeam from "../components/PokemonTeam";

const axios = require('axios');
let backend = `http://localhost:5000`

const AllTeamsContainer = (props) => {
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        axios.get(backend + '/teams')
        .then(response => setAllTeams(response.data))
        .catch(err => console.log('The error was caught: ', err ))
    }, [])
    
    return (
        <div>
            This will be the all teams container
            {allTeams.map(team => {
                return <PokemonTeam key={team._id} teamObj={team}/>
            })}

            <button>
                <Link to="/">Back Home</Link>
            </button>
        </div>
    )
}

export default AllTeamsContainer;