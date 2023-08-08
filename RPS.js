const getUserChoice = () => {
    let userInput = prompt("Select your action").toLowerCase();
    if (userInput === "rock" || "paper" || "scissors") {
        return userInput;
    } else {
        console.log("Wrong input. Type in either rock,paper or scissors");
    }
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
function playGame() {
    let userChoice = getUserChoice("rock");
    let computerChoice = getComputerChoice();
    console.log(userChoice,computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}


let games = 0;
while (games < 5){
    playGame();
    games++;
    console.log(games);
}
