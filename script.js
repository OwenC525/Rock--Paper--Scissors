
let roundsplayed = 0
let playerscore = 0
let computerscore = 0


  const getComputerChoice = () => {
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
  
  function determineWinner(userChoice) {
    
    if (userChoice === getComputerChoice()) {
      result.textContent = 'It\'s a tie!';
      roundsplayed++;
    } 
    else if (userChoice === 'rock' && getComputerChoice() === 'scissors' || userChoice === 'paper' && getComputerChoice() === 'rock' || userChoice === 'scissors' && getComputerChoice() === 'paper'){
      result.textContent = 'You won!';
      roundsplayed++;
      playerscore++;
    }  
    else {
      result.textContent = 'You lose!';
      roundsplayed++;
      computerscore++;
    }
      
    };

    // PUT BUTTON JS HERE LATER??
  
