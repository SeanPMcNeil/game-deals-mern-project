const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: String,
    image: String
}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;