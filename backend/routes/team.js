const express = require('express');
let router = express.Router();

router.get('/generate', function(req, res){
    res.json('Team Generated!')
})


module.exports = router