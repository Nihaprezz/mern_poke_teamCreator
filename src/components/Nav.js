import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div>       
            <Link to="/"><h1>Pokemon Team Generator</h1></Link>
            <button>
               <Link to="/teams"> All Teams </Link> 
            </button>
        </div>
    )
}

export default Nav;