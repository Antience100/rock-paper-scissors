const totalRounds = 5;
const resultText = document.getElementById("result-text");
const resultScore = document.getElementById("result-score");
const buttons = document.querySelectorAll("button");
const hScoreSpan = document.getElementById("human-score");
const cScoreSpan = document.getElementById("computer-score");

let humanScore = 0;
let computerScore = 0;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  if (computerChoice === 0) {
    return rock;
  } else if (computerChoice === 1) {
    return paper;
  } else if (computerChoice === 2) {
    return scissors;
  }
}

// function getHumanChoice() {
//     let humanChoice = prompt('Please choose Rock, Paper, or Scissors').toLowerCase();
//     console.log("Human chose : " + humanChoice);
//     return humanChoice;
// }

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanScore >= 5 && computerScore < 5) {
    resultText.textContent = "You've beat the computer! Nice!";
    return;
  } else if (computerScore >= 5 && humanScore < 5) {
    resultText.textContent = "You have lost to the computer! No bueno!";
    return;
  } else if (computerScore > 4 && humanScore > 4 && computerScore === humanScore) {
    resultText.textContent = "You have tied! Interesting...";
    return;
  }; 

  if (humanChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice == "paper")
  ) {
    resultText.textContent =
      "You win! " +
      capitalize(humanChoice) +
      " beats " +
      capitalize(computerChoice);
      humanScore++;
      hScoreSpan.textContent = humanScore;
  } else {
    resultText.textContent =
      "You lose! " +
      capitalize(computerChoice) +
      " beats " +
      capitalize(humanChoice);
      computerScore++;
      cScoreSpan.textContent = computerScore;
  };
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

// Removed the game logic that plays 5 rounds
/* function playGame(rounds) {
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

playGame(totalRounds); */
