import React from "react";

const PokemonTeam = (props) => {
    const {teamname, createdAt} = props.teamObj
    console.log(props.teamObj.pokemons)
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
        </div>
    )
}

export default PokemonTeam