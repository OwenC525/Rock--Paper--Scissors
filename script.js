console.log('hi');
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Invalid input');
    };
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1: 
      return 'paper';
      break;
      case 2:
      return 'scissors'
      break;
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'Tie';
    } 
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost';
      } else {
        return 'You Won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'You lost';
      } else {
        return 'You Won!';
      }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'You lost';
        } else {
          return 'You Won!';
        }
      }
  
      if (userChoice === 'bomb') {
        return 'Congratulations, you won!';
      }
    };
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();