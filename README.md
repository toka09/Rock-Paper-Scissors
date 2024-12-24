# Rock-Paper-Scissors
## **Overview**

**This is a simple imentation of the classic "Rock-Paper-Scissors" game where a user plays against the computer. The program randomly selects a choice for the computer, takes the user’s input, and determines the winner based on the rules of the game. The game can be played for a specified number of rounds (e.g., 5 rounds), and it keeps track of the scores to announce the overall winner.**

## **Features**

- Randomized computer choices ("rock", "paper", "scissors").
- User input through prompts.
- Case-insensitive user input.
- Logic to determine the winner of each round.
- Scorekeeping for both the user and the computer.
- Announcement of the final winner after multiple rounds.

## How to Play

1. Open the HTML file in your browser.
2. A prompt will appear asking you to enter your choice (“rock”, “paper”, or “scissors”).
3. The computer will randomly select its choice.
4. The program will determine the winner for the round and update the scores.
5. After playing all rounds, the program will announce the overall winner.

## Rules

- Rock beats Scissors.
- Scissors beats Paper.
- Paper beats Rock.
- If both the user and the computer choose the same option, it’s a tie.

## Setup Instructions

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.
3. Make sure JavaScript is enabled in your browser.

## Code Structure

### Functions

- ``: Randomly selects and returns one of the three choices: "rock", "paper", or "scissors".
- ``: Prompts the user to input their choice, validates the input, and returns the choice.
- ``: Takes the user’s choice and the computer’s choice as arguments, determines the winner, updates the scores, and logs the result.
- ``: Handles the overall game logic. Plays a set number of rounds, keeps track of scores, and announces the final winner.

### Global Variables

- `humanScore`: Keeps track of the user’s score.
- `computerScore`: Keeps track of the computer’s score.

## Example Output

**Round-by-Round**:

```
Round 1
Enter your choice (rock, paper, or scissors): rock
You win! Rock beats Scissors
Scores: Human 1, Computer 0

Round 2
Enter your choice (rock, paper, or scissors): paper
You lose! Scissors beats Paper
Scores: Human 1, Computer 1
```

**Final Score**:

```
Congratulations! You are the winner!
```
## Future Improvements

- Create a graphical user interface (GUI) for better user experience.
- Add sound effects and animations.
- Allow users to specify the number of rounds.
- Add support for multiplayer.

## Technologies Used

- HTML
- JavaScript