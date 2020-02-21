import React from "react";
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div>       
            <h1>Pokemon Team Generator</h1>
            <button>
               <Link to="/teams"> All Teams </Link> 
            </button>
        </div>
    )
}

export default Nav;