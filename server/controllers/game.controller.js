const Game = require("../models/game.model");

module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json({ message: "Error adding game!", error: err}))
}

module.exports.allGames = (req, res) => {
    Game.find().sort({ "createdAt": "desc" }).limit(25)
        .then(allGames => res.json(allGames))
        .catch(err => res.json({ message: "Error finding all games!", error: err }))
}

module.exports.deleteGame = (req, res) => {
    Game.deleteOne({ _id: req.params.id })
        .then(res.json({ message: "Game was successfully removed" }))
        .catch(err => res.json({ message: "Error deleting one game!", error: err }))
}