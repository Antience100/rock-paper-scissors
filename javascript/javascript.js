let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(str) {
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else if (computerChoice === 2) {
    return scissors;
  }
}

function getHumanChoice(str) {
    const humanChoice = prompt('Please choose rock, paper, or scissors');
    
    return humanChoice;
}