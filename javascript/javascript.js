const totalRounds = 5;

function capitalize(str) {

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {

    const computerChoice = Math.floor(Math.random() * 3);
    const rock = 'rock';
    const paper = 'paper';
    const scissors = 'scissors';

  if (computerChoice === 0) {
    console.log("Computer chose: rock");
    return rock;
  } else if (computerChoice === 1) {
    console.log("Computer chose: paper");
return paper;
  } else if (computerChoice === 2) {
    console.log("Computer chose: scissors");
    return scissors;
  }
}

function getHumanChoice() {
    let humanChoice = prompt('Please choose Rock, Paper, or Scissors').toLowerCase();
    console.log("Human chose : " + humanChoice);
    return humanChoice;
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
          console.log("It\'s a tie!");
          result = "tie";
          return result;
      } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' &&computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice == 'paper')) {
          console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
          result = "human";
          return result;
      } else {
          console.log('You lose! ' + capitalize(computerChoice) + ' beats ' + capitalize(humanChoice));
          result = "computer";
          return result;
      }
}

function playGame(rounds) {
  let humanScore = 0;
  let computerScore = 0;
  let roundWinner = "";
  playedRounds = 1;

  do {
    roundWinner = playRound();
    if (roundWinner === "human") {
      humanScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }
    playedRounds++;
  } while (playedRounds <= rounds);
  if (computerScore > humanScore) {
    console.log("Computer wins! " + computerScore + " points to " + humanScore);
  } else if (humanScore > computerScore) {
        console.log("Human wins! " + humanScore + " points to " + computerScore);
  } else {
    console.log("No one wins! humanScore: " + humanScore + " to computerScore: " + computerScore);
  }
}

playGame(totalRounds);