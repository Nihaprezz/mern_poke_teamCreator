import React from "react"

const PokemonCard = (props) => {
    let { sprite } = props
    let pokeName = sprite.split("xy/")[1].split('.gif')[0]

    return (
        <div> 
            <img alt="pokemon-gif" src={sprite}></img>
             <p>{pokeName}</p>            
        </div>
    )
}

export default PokemonCard