let username = prompt('What is your name?'); // COLLECTS PLAYER NAME

if (username === null || '') {
  username = prompt('Enter your name!'); // ASKS FOR NAME UNTIL VALID RESPONSE IS ENTERED
}

document.getElementById('username').innerHTML = username; // USES HTML ID TO INSERT USERNAME

// INITIAL SCORING BOARD
let roundsPlayed = 0
let playerScore = 0
let computerScore = 0


// COMPUTER CHOICE
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      case 1: 
      return 'paper';
      case 2:
      return 'scissors'
    }
  };
  

  // PLAYER CHOICE
  function determineWinner(userChoice) {
    const computerChoice = getComputerChoice(); // Store the computer's choice
    
    if (userChoice === computerChoice) {
      result.textContent = 'It\'s a tie!';
      roundsPlayed++;
    } 
    else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
      result.textContent = 'You won!';
      roundsPlayed++;
      playerScore++;
    }  
    else {
      result.textContent = 'You lose!';
      roundsPlayed++;
      computerScore++;
    }
      

    // UPDATES SCORE AND ROUNDS PLAYED
    document.getElementById('playerScore').innerText = `${username} score: ${playerScore}`
    document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`
    document.getElementById('roundsPlayed').innerHTML = `Rounds played: ${roundsPlayed}`;

    if (roundsPlayed === 5){ // STOPS GAME AFTER 5 ROUNDS
      document.getElementById('rock').classList.toggle('d-none');
      document.getElementById('paper').classList.toggle('d-none');
      document.getElementById('scissors').classList.toggle('d-none');
      document.getElementById('result').classList.toggle('d-none');
   }


    };

    // PUT BUTTON JS HERE LATER??
  
