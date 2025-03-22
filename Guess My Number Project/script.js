'use strict';

// DOM Manuplation
// DOM stnads for Documant Objet Model,  structured representation of HTML documents,
// Allows Javascript to access HTML elements and styles to manipulate them.

/*

console.log(document.querySelector('.message').textContent);http://127.0.0.1:8080/
// textContent property of the classt message that is being logged

document.querySelector('.message').textContent = '📌Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 0;

console.log(document.querySelector('.guess').value);

*/

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when guess is not a number
  if (!guess) {
    displayMessage('Not a number');
  }

  // when player wins
  else if (guess === SecretNumber) {
    document.querySelector('.number').textContent = SecretNumber;

    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // whne is different than sectet number
  else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
