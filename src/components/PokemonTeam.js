import React from "react";
import { Link } from "react-router-dom";

const PokemonTeam = (props) => {
    const {teamname, createdAt, _id} = props.teamObj

    return (
        <div>
            <h1>{teamname}</h1>
            <p>{createdAt}</p>

            <div className="pokemon-cards">
            {props.teamObj.pokemons.map(pkm => {
                return (
                    <div className="uk-card uk-card-default my-card-style" key={pkm._id}>
                        <div className="card-sprite">
                            <img alt="poke-gif" src={pkm.pokegif}></img>
                        </div>

                        <div className="card-name">
                            <h3>{pkm.pokename}</h3>
                        </div>
                    </div>
                )
            })}
            </div>

            <button> <Link to={`/team/${_id}/edit`}>Edit Team</Link></button>
            <button onClick={() => props.deleteTeam(_id)}>Delete Team</button>
        </div>
    )
}

export default PokemonTeam