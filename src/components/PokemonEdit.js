import React from "react"

const PokemonEdit = (props) => {
    let {pokename, pokegif, _id} = props.pkmObj
    return (
        <div>
            <img alt="pokegif" src={pokegif}></img>
            <h2>{pokename}</h2>
            <button onClick={() => props.remove(_id)}>Remove</button>
        </div>
    )
}

export default PokemonEdit;