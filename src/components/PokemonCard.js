import React from "react"

const PokemonCard = (props) => {
    console.log(props)
    let { sprite } = props
    return (
        <div>
            <p>PokemonCard</p> 
            <img alt="pokemon-gif" src={sprite}></img>
        </div>

    )
}

export default PokemonCard