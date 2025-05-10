const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const gameRounds = 5;
    
function capitalize(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {

  const computerChoice = Math.floor(Math.random() * 3);
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else if (computerChoice === 2) {
    return scissors;
  }
}

function getHumanChoice() {

    let humanChoice = prompt('Please choose Rock, Paper, or Scissors').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore, result) {
    humanChoice = humanSelection;
    computerChoice = computerSelection;
    humanScore = 0;
    computerScore = 0;

    if (humanChoice === computerChoice) {
        result = "'It's a tie!'";
        return result;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' &&computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice == 'paper')) {
        result = 'You win! ' + humanChoice + ' beats ' + computerChoice;
        humanScore++;
        return result;
    } else {
        result = 'You lose! ' + capitalize(computerChoice) + ' beats ' + capitalize(humanChoice);
        computerScore++;
        return result;
    }
}

function playGame(gameRounds) {
    let playedRounds = 0;
    if (playedRounds <= rounds - 1) {
        console.log(humanSelection);
        playRound(humanSelection, getComputerChoice(), hScore, cScore, result);
        console.log(humanSelection);
    }
}