//(function(my) {

// Private data
var player1 = $('#player1');
var player2 = $('#player2');
var robot1 = $('#robot1');
var robot2 = $('#robot2');

var lifeDOM = [$('#life_P1'), $('#life_P2')];

/*** Robot models ***/
var massStart   = 16;
var energyStart = 16;

var missleCost_mass   = 1;
var missleCost_energy = 3;
var shieldCost_mass   = 3;
var shieldCost_energy = 1;

function Life() {
  this.mass = massStart;
  this.energy = energyStart;
}

Life.prototype.missle = function() {
  if ((this.mass >= missleCost_mass) && (this.energy >= missleCost_energy)) {
    this.mass   -= missleCost_mass;
    this.energy -= missleCost_energy;
    return true;
  }
  return false;
};

Life.prototype.shield = function() {
  if ((this.mass >= shieldCost_mass) && (this.energy >= shieldCost_energy)) {
    this.mass   -= shieldCost_mass;
    this.energy -= shieldCost_energy;
    return true;
  }
  return false;
};



var life = [new Life(), new Life()]; // Array of life "resources" objects, one per player
console.log('life = ', life);

/*** Game Play ***/
function changeTurn(playersTurn) {
  if (playersTurn === 1) {
    player2.removeClass('box-shadow-neon');
    player1.addClass('box-shadow-neon');
  } else if (playersTurn === 2) {
    player1.removeClass('box-shadow-neon');
    player2.addClass('box-shadow-neon');
  } else {
    console.log('not a valid input');
  }
}

function fireMissle(p) {
  if (life[p - 1].missle()) {
    console.log('player '+ p + ' fired a missle');
    statsUpdate(p - 1);
  } else {
    console.log('player '+ p + ' can\'t build a missle due to low resources.');
  }
}

function buildShield(p) {
  if (life[p - 1].shield()) {
    console.log('player '+ p + ' built a shield');
    statsUpdate(p - 1);
  } else {
    console.log('player '+ p + ' can\'t build a shield due to low resources.');
  }
}

function checkLifeStatus() {
  if(life[1].energy == 0) {
    robot2.attr('src', 'i/broken-robot-1.jpg');
  } else if (life[0].energy == 0) {
    robot1.attr('src', 'i/Destroyed_Robot2.png');
  } else {
    console.log('everyone is alive');
  }
}

$('#player1-offense').click(function(){
  fireMissle(1);
  statsUpdate(0);
  changeTurn(2);
  checkLifeStatus();
});

$('#player1-defense').click(function(){
  buildShield(1);
  changeTurn(2);
  checkLifeStatus();
});

$('#player2-offense').click(function(){
  fireMissle(2);
  changeTurn(1);
  checkLifeStatus();
});

$('#player2-defense').click(function(){
  buildShield(2);
  changeTurn(1);
  checkLifeStatus();
});

var template_life = $('#template_life');
var fillTemplate_life = Handlebars.compile(template_life.html());
function statsUpdate(player) {
  lifeDOM[player].html(fillTemplate_life(life[player]));
}
statsUpdate(0);
statsUpdate(1);

//game = {};
//my.game = game;
//})(window);
