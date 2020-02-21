import React, { useState, useEffect } from "react";
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

        </div>
    )
}

export default AllTeamsContainer;