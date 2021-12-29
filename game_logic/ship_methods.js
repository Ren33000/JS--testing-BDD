// LOOK for ships
function checkForShip (player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];

        shipPresent = ship.locations.filter(function (actualCoordinate) {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
        }) [0];

        if (shipPresent) {
            return ship;
        } 
    }
    return false;
}

// RECORD ship that got damaged
function damageShip (ship, coordinates) {
    ship.damage.push(coordinates)
}

// RECORD damaged ship of given player (reuse both previous functions)
function fire (player, coordinates) {
    var ship = checkForShip(player, coordinates);

    if (ship) {
        damageShip(ship, coordinates);
    }

}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;