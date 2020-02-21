const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamname: {type: String, required: true},
    pokemons: [{ pokename: String, pokegif: String}]
}, {
    timestamps: true
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;