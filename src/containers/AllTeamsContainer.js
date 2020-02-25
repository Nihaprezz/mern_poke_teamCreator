import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import PokemonTeam from "../components/PokemonTeam";

const axios = require('axios');
let backend = `http://localhost:5000`

const AllTeamsContainer = () => {
    const [allTeams, setAllTeams] = useState([]);

    useEffect(() => {
        axios.get(backend + '/teams')
        .then(response => setAllTeams(response.data))
        .catch(err => console.log('The error was caught: ', err ))
    }, [])

    const deleteTeam = (teamId) => {
        axios.delete(backend + `/teams/${teamId}`)
        .then(response => {
            let filtered = [...allTeams].filter(team => team._id !== response.data._id)
            setAllTeams(filtered)   //need to alert user that the team has been deleted
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            {allTeams.map(team => {
                return <PokemonTeam key={team._id} teamObj={team} deleteTeam={deleteTeam}/>
            })}

            <button>
                <Link to="/">Back Home</Link>
            </button>
        </div>
    )
}

export default AllTeamsContainer;