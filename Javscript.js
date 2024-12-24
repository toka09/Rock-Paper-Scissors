function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum ===0) return "rock" ;
    if (randomNum ===1) return "paper" ;
    return "scissors";
}
console.log(getComputerChoice());

function getHumanChoice() {
    const validChoices = ["rock", "paper", "scissors"]; // Define valid choices
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    if (validChoices.includes(choice)) {
      return choice; // Return the valid choice
    } else {
        console.log("Invalid choice, please try again.");
      return getHumanChoice(); // Recursively call the function if invalid
    }
} 

let humanScore = 0;
let computerScore = 0;
console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`); 
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);  
    }
    console.log(`Scores: Human ${humanScore}, Computer ${computerScore}`); 
} 

function playGame() { 
    humanScore = 0;
    computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("The computer wins! Better luck next time.");
    } else {
        console.log("It's a tie overall!");
    }
}    
playGame();