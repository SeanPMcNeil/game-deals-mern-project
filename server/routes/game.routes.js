const GameController = require("../controllers/game.controller");

module.exports = app => {
    // CREATE
    app.post('/api/games/create', GameController.createGame);
    // READ ALL
    app.get('/api/games', GameController.allGames);
    // DELETE
    app.delete('/api/games/delete/:id', GameController.deleteGame);
}