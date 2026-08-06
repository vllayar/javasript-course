let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}



const scoreDisplay = document.querySelector('.score');

scoreDisplay
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

function pickComputerMove() {
  let num = Math.random();
  if (num < 1 / 3) return 'rock';
  if (num < 2 / 3) return 'paper';
  return 'scissors';
}

function playGame(userMove) {
  let computerMove = pickComputerMove();
  let result;

  if (userMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
      score.ties++;
    } else if (computerMove === 'paper') {
      result = 'You lose...';
      score.losses++;
    } else if (computerMove === 'scissors') {
      result = 'You win!';
      score.wins++;
    }
  } else if (userMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
      score.wins++;
    } else if (computerMove === 'paper') {
      result = 'Tie.';
      score.ties++;
    } else if (computerMove === 'scissors') {
      result = 'You lose...';
      score.losses++;
    }
  } else if (userMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose...';
      score.losses++;
    } else if (computerMove === 'paper') {
      result = 'You win!';
      score.wins++;
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
      score.ties++;
    }
  }

  updateScore(userMove, computerMove, result);

  document.querySelector('.js-result').innerHTML = `${result}`;
  document.querySelector('.js-moves')
    .innerHTML = `You <img src="img/${userMove}-emoji.png" class="move-emoji"> <img src="img/${computerMove}-emoji.png" class="move-emoji"> Computer`;

  localStorage.setItem('score', JSON.stringify(score));
}

function updateScore(userMove, computerMove, result) {
  scoreDisplay.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  scoreDisplay.innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  localStorage.removeItem('score');
  document.querySelector('.js-result').innerHTML = ``;
  document.querySelector('.js-moves').innerHTML = ``;
}