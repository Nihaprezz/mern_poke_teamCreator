const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const teamSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }, 
    createdBy: {
        type: String, 
        required: true
    }, 
    pokemons: [{ pokename: String, pokeimage: String, poketype: String}]
})

module.exports = Team = mongoose.model('item', teamSchema);