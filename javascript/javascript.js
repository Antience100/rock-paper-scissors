function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice(str) {
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

function getHumanChoice(str) {
    let humanChoice = prompt('Please choose Rock, Paper, or Scissors').toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let humanScore = 0;
    let computerScore = 0;
    humanChoice = humanSelection;
    computerChoice = computerSelection;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice == 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
        console.log("Human score: " + humanScore);
    } else {
        console.log("You lose! " + capitalize(computerChoice) + " beats " + capitalize(humanChoice));
        computerScore++;
        console.log("Computer score: " + computerScore);
    }
    /*
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock");
    } else if (humanChoice === 'scissors' && computerChoice == 'paper') {   
        console.log("You win! Scissors beats Paper");
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats Scissors");
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log("You lose! Paper beats Rock");
    } else if (computerChoice === 'scissors' && humanChoice == 'paper') {
        console.log("You lose! Scissors beats Paper");
    } else (computerChoice === 'rock' && humanChoice === 'scissors');{
        console.log("You lose! Rock beats Scissors");
        return;
    }
        */
}
playRound();