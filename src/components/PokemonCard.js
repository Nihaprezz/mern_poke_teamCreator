import React from "react"

const PokemonCard = (props) => {
    let { sprite } = props
    let pokeName = sprite.split("xy/")[1].split('.gif')[0]

    return (
        <div className="uk-card uk-card-default my-card-style"> 

            <div className="card-sprite">
              <img alt="pokemon-gif" src={sprite}></img>  
            </div>

            <div className="card-name">
              <p>{pokeName}</p>   
            </div>         
        </div>
    )
}

export default PokemonCard

