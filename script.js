console.log('hi');
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
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
    else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper'){
      return 'You Won!';
    }  
    else {
      return 'You Lost';
    }
      
    };

    // PUT BUTTON JS HERE LATER??
  
  const playGame = () => {
    const userChoice = determineWinner();
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();