// Enemies our player must avoid
var Enemy = function(x,y,s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //x-postion of enemy
    this.x = x;
    //y-position of enemy.
    this.y = y;
    this.speedMultiplier = s; 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //move enemy
    //console.log(this.y, this.x);
    this.x = this.x < 505 ? this.x + (dt*this.speedMultiplier): -101;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Player

let Player = function(x_init, y_init) {
    //x-coordinate for player
    //set initial possition
    this.x = x_init;
    this.y = y_init;
    //player image
    this.player = 'images/char-boy.png';

};

//player update method.
Player.prototype.update = function() {

};

//player render method

Player.prototype.render = function() {

};

//input handling for player

Player.prototype.handleInput = function(move) {

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [new Enemy(-101,60,200), new Enemy(-101,143,300), new Enemy(-101,226,400)];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
