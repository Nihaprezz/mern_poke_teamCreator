const express = require('express');
const pokemonGif = require('pokemon-gif');
let router = express.Router();


router.get('/generate', function(req, res){
    res.json('Team Generated!')
})


module.exports = router