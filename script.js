let username = prompt('What is your name?'); // COLLECTS PLAYER NAME

if (username === null || username.trim() === '') {
  username = prompt('Enter your name!'); // ASKS FOR NAME UNTIL VALID RESPONSE IS ENTERED
}

document.getElementById('username').innerHTML = username; // USES HTML ID TO INSERT USERNAME

// INITIAL SCORING BOARD
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

let winmsg = ['Congratulation, You Won!', 'Wow, you beat the computer!', 'You Won! Play Again?'];
let losemsg = ['You lost. Better luck next time.', 'You lost to the computer!', 'Nice try, but you lost this time.'];
let tiemsg = ['It was a tie! Try Again?', 'You tied with the computer! Play Again?'];

// COMPUTER CHOICE
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// Function to reset the game
function reset() {
  roundsPlayed = 0;
  playerScore = 0;
  computerScore = 0;

  document.getElementById('playerScore').textContent = `${username} Score: ${playerScore}`;
  document.getElementById('computerScore').textContent = `Computer's Score: ${computerScore}`;
  document.getElementById('roundsPlayed').textContent = `Rounds played: ${roundsPlayed}`;
  document.getElementById('result').textContent = '';
  document.getElementById('userChoice').textContent = '';
  document.getElementById('computerChoice').textContent = '';

  // Re-enable the buttons
  document.getElementById('rock').disabled = false;
  document.getElementById('paper').disabled = false;
  document.getElementById('scissors').disabled = false;

  document.getElementById('rock').classList.remove('d-none'); // Reset the buttons
  document.getElementById('paper').classList.remove('d-none');
  document.getElementById('scissors').classList.remove('d-none');
  document.getElementById('result').classList.add('d-none');
}

// Function to determine the winner of each round
function determineWinner(userChoice) {
  const computerChoice = getComputerChoice(); // Store the computer's choice

  if (userChoice === computerChoice) {
    result.textContent = 'It\'s a tie!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result.textContent = 'You won!';
    playerScore++;
  } else {
    result.textContent = 'You lose!';
    computerScore++;
  }

  roundsPlayed++;

  // Update scores and rounds played
  document.getElementById('playerScore').innerText = `${username} Score: ${playerScore}`;
  document.getElementById('computerScore').innerHTML = `Computer's Score: ${computerScore}`;
  document.getElementById('roundsPlayed').innerHTML = `Rounds played: ${roundsPlayed}`;

  if (roundsPlayed === 5) {
    // Game over after 5 rounds
    endGame();
    // Disable the buttons after 5 rounds
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
  }
}

// Function to display the end game message
function endGame() {
  let message;

  if (playerScore > computerScore) {
    message = winmsg[Math.floor(Math.random() * winmsg.length)];
  } else if (playerScore < computerScore) {
    message = losemsg[Math.floor(Math.random() * losemsg.length)];
  } else {
    message = tiemsg[Math.floor(Math.random() * tiemsg.length)];
  }

  document.getElementById('resultMsg').textContent = message;
}

// Reset the game initially
reset();