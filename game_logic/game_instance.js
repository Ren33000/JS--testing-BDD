// const { fire } = require("./ship_methods"); CAME automatically from VS.code
var fire = require('./ship_methods.js').fire;

function checkGameStatus (players) {
    return false;
}

function takeTurn (opposingPlayer, guessFunction) {
    var coordinates = guessFunction();
    fire(opposingPlayer, coordinates);
    var gameOver = checkGameStatus();
    
    return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;

// CLI command to have mocha running the test in continuous for this folder:
// mocha --watch ./test/game_test.js ./game_logic/game_instance.js