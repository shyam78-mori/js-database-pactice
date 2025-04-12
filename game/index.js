let result = document.getElementById("result");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerScores = 0;
let computerScores = 0;

function play(playerChoice) {
  const choice = ["Stone", "Paper", "Scissors"];
  const computerChoice = choice[Math.floor(Math.random() * choice.length)];
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!";
    playerScores++;
    computerScores++;
    playerScore.textContent = playerScores;
    computerScore.textContent = computerScores;
  } else if (
    (playerChoice === "Stone" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Stone") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result.textContent = `you win ${playerChoice} beats ${computerChoice}`;
    playerScores++;
    playerScore.textContent = `Player Score: ${playerScores}`;
  } else {
    result.textContent = `you lose ${computerChoice} beats ${playerChoice}`;
    computerScores++;
    computerScore.textContent = `computer Score: ${computerScores}`;
  }
}


let heading = document.querySelector('.container');
let btn = document.querySelector('.choice');
heading.style.textAlign = 'center'
btn.style.textAlign = 'center'
btn.style.gap = '20px'
btn.style.marginTop = '5rem'

document.body.style.background = 'black';
document.body.style.color = 'white';
document.body.style.textAlign = 'center';

