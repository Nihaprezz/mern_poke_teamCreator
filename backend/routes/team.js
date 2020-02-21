const express = require('express');
const pokemonGif = require('pokemon-gif');

let Team = require('../models/team.model')
let router = express.Router();

router.get("/", function(req, res){
    Team.find()
    .then( teams => res.json(teams) )
    .catch( err => res.status(400).json('Error: ' + err))
})

//auto generates 6 gif urls
router.get('/generate', function(req, res){
    let randomPk = []

    for(let i = 1; i <= 6; i++){
        let randomNum = Math.floor(Math.random() * 386)
        randomPk.push(randomNum)
    }

    res.json(randomPk.map(num => pokemonGif(num))) 
})

router.post('/add', function(req, res) {
    const teamname = req.body.teamname;
    const pokemons = req.body.pokemons;


    const newTeam = new Team ({
        teamname, 
        pokemons
    })

    newTeam.save()
    .then(() => res.json(newTeam))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get("/:id", function(req, res){
    Team.findById(req.params.id)
    .then(team => res.send(team))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router