player1 = $('#player1');
player2 = $('#player2');

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

(function(my) {
  // Private data
  var d;

  game = {};


  my.game = game;
})(window);
