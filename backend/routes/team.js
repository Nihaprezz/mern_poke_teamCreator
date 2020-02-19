const express = require('express');
const pokemonGif = require('pokemon-gif');
let router = express.Router();


router.get('/generate', function(req, res){
    let randomPk = []

    for(let i = 1; i <= 6; i++){
        let randomNum = Math.floor(Math.random() * 386)
        randomPk.push(randomNum)
    }

    res.json(randomPk.map(num => pokemonGif(num))) 
})


module.exports = router