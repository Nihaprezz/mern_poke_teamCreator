import React from "react";
import { Link } from "react-router-dom";

const PokemonTeam = (props) => {
    const {teamname, createdAt, _id} = props.teamObj

    return (
        <div>
            <h1>{teamname}</h1>
            <p>{createdAt}</p>
            {props.teamObj.pokemons.map(pkm => {
                return (
                    <div key={pkm._id}>
                        <h3>{pkm.pokename}</h3>
                        <img alt="poke-gif" src={pkm.pokegif}></img>
                    </div>
                )
            })}

            <button> <Link to={`/team/${_id}/edit`}>Edit Team</Link></button>
            <button onClick={() => props.deleteTeam(_id)}>Delete Team</button>
        </div>
    )
}

export default PokemonTeam