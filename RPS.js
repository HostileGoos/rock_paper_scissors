const rockButton = document.querySelector('#btnRock');
const paperButton = document.querySelector('#btnPaper');
const scissorsButton = document.querySelector('#btnScissors');
const resultDiv = document.querySelector('#result');

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
const determineWinner = (userChoice,computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie";
    }
    if (userChoice === "rock") {
        if(computerChoice === "paper")
            return "Computer won";
    }   else {
            return "User won";
    }
    if (userChoice === "paper") {
        if(computerChoice === "scissors" )
            return "Computer won";
    }   else {
            return "User won";
    }
    if (userChoice === "scissors") {
        if(computerChoice === "rock")
            return "Computer won";
    }   else {
            return"User won";
    }
};
function playGame(playerSelection) {
    let userChoice = getUserChoice(playerSelection);
    let computerChoice = getComputerChoice();
    let result = determineWinner(userChoice, computerChoice);
    if (result === "The game was a tie") {
        alert("It's a tie!");
    } else if (result === "User won"){
        alert("You won");
    } else if (result === "Computer won") {
        alert("Computer won!");
    }

};