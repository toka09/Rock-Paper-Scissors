// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function to randomly select the computer's choice
function getComputerChoice() {
   let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
    return "scissors";
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");

  // Determine the round result
    if (humanChoice === computerChoice) {
    resultsDiv.innerHTML = `<p>It's a tie! You both chose ${humanChoice}.</p>`;
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
    humanScore++;
    resultsDiv.innerHTML = `<p>You win! ${humanChoice} beats ${computerChoice}.</p>`;
    } else {
    computerScore++;
    resultsDiv.innerHTML = `<p>You lose! ${computerChoice} beats ${humanChoice}.</p>`;
    }

  // Update and display the running score
    scoreDiv.innerHTML = `<p>Scores: Human ${humanScore}, Computer ${computerScore}</p>`;

  // Check if a player has won
    if (humanScore === 5 || computerScore === 5) {
    declareWinner();
    }
}

// Function to declare the winner and disable buttons
function declareWinner() {
    const resultsDiv = document.getElementById("results");
    const buttons = document.querySelectorAll("button");

    if (humanScore === 5) {
    resultsDiv.innerHTML = `<p>Congratulations! You reached 5 points and won the game!</p>`;
    } else {
    resultsDiv.innerHTML = `<p>Game over! The computer reached 5 points and won the game. Better luck next time!</p>`;
    }

  // Disable buttons
    buttons.forEach((button) => (button.disabled = true));
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
