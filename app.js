(function(my) {

// Private data
var player1 = $('#player1');
var player2 = $('#player2');

var life_P1 = $('#life_P1');
var life_P2 = $('#life_P2');

/*** Robot models ***/
var massStart = 3;
var energyStart = 3;

function makeData() {
  this.mass = massStart;
  this.energy = energyStart;
}
var p1_data = new makeData();
var p2_data = new makeData();

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

$('#player1-offense').click(function(){
  console.log('player 1 fired missle');
  changeTurn(2);
});

$('#player1-defense').click(function(){
  console.log('player 1 built shield');
  changeTurn(2);
});

$('#player2-offense').click(function(){
  console.log('player 2 fired missle');
  changeTurn(1);
});

$('#player2-defense').click(function(){
  console.log('player 2 built shield');
  changeTurn(1);
});

var template_life = $('#template_life');
var fillTemplate_life = Handlebars.compile(template_life.html());
life_P1.html(fillTemplate_life(p1_data));
life_P2.html(fillTemplate_life(p2_data));

game = {};
my.game = game;

})(window);
