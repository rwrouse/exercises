var name = prompt('What is your name? ');
alert('Hello ' + name);

var qPlay = prompt('Do you want to play a game?')

var answer = function() {
  if (qPlay === 'No') {
    var qCkn = prompt('Are you chicken?');
    if (qCkn === 'Yes'){
      alert("That explains the smell");
    }
    else {
      playGame();
    }
  }
  else {
    playGame();
  }

};

function playGame() {
  var playerGuess = prompt('Great! Guess a number between 1 and 1000');
     if (playerGuess === '45'){
       prompt('Wow! You are good.  Do you want to play again?');
       if ('Yes') {
         playGame();
       }
       else {
         alert('Thank you for playing')
       }
     }
     else {
       prompt('Nope! Do you want to play again');
       if ('Yes') {
         playGame();
       }
       else {
         alert('Thank you for playing');
       }
     }
};

answer();
