const rockButton = document.querySelector('#btnRock');
const paperButton = document.querySelector('#btnPaper');
const scissorsButton = document.querySelector('#btnScissors');
const resultDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

let userScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

const getUserChoice = (playerSelection) => {
    return playerSelection;
};

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return"rock";
        case 1:
            return"paper";
        case 2:
            return"scissors";
    } 
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "User won";
    } else {
        return "Computer won";
    }
};
function playGame(playerSelection) {
    let userChoice = getUserChoice(playerSelection);
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    
    if (result === "User won") {
        userScore++;
    } else if (result === "Computer won") {
        computerScore++;
    }

    if (result === "The game was a tie") {
    } else if (result === "User won"){
    } else if (result === "Computer won") {
    }
    
    scoreDiv.textContent = `User: ${userScore}, Computer: ${computerScore}`;
    resultDiv.textContent = result;

    if (userScore >= 5) {
        resultDiv.textContent = "User won!";
        disableButtons();
    } else if (computerScore >= 5) {
        resultDiv.textContent = "Computer won!";
        disableButtons();
    }
}
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}