const express = require('express');
let router = express.Router();
let User = require('../models/user.model');

router.get('/', function(req, res){
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.post('/add', function(req, res){
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: '+ err))
})


module.exports = router;