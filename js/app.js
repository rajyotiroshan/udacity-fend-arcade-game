// Enemies our player must avoid
var Enemy = function(x,y,r,s) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    //x-postion of enemy
    this.x = x;
    //y-position of enemy.
    this.y = y;
    //enemy row.
    this.row = r;
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

let Player = function(x_init, y_init, r) {
    //x-coordinate for player
    //set initial possition
    this.x = x_init;
    this.y = y_init;
    //row position.
    this.row = r;
    //player image
    this.sprite = 'images/char-boy.png';

};

//player update method.
Player.prototype.update = function() {
    //update player position.
};

/*//check for possible collision with enemy.
let checkCollision  = function(){
    switch(player.row) {
        case 3 : {
            console.log("3 rd row");
            break;
        }
        case 2 : {
            console.log("2nd row");
            break;
        }
        case 1 : {
            console.log("1st row");
            break;
        } 
    }
}
*/

//player render method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//input handling for player
Player.prototype.handleInput = function(move) {
    switch(move) {
        case "left": {
            if(this.x - 101 < 0 ) return;
            this.x -= 101;
            break;
        }
        case "up": {
            this.y -= 83;
            this.row--;
            if(this.y < 0 ){
                //re-position player to init position.
                this.x = 202;
                this.y = 415;
                this.row = 5;
            }
            
            break;
        }
        case "down": { 
            if(this.y+83 >= 498) {//do not let player go below off canvas.
                return;
            }
            this.y += 83;
            this.row++;
            break;
        }
        case "right": {
            if(this.x + 101 >= 505) return;
            this.x += 101;
            break;
        }
    }

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [new Enemy(0,60,1,200), new Enemy(0,143,2,300), new Enemy(0,226,3,400)];

// Place the player object in a variable called player
let player = new Player(202,415,5);

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
