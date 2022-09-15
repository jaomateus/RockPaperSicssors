// Declare global variables
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;



// generate a random value from myArray
function getComputerChoice () {
    const myArray = ["Rock", "Paper", "Scissors"]
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// play Rock Scissor Paper
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    
    // just for testing
    console.log (computerSelection)
    console.log (playerSelection)

    // test the options 
    if (computerSelection == playerSelection) {
        console.log ("Tie game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
        ) {

        computerScore = computerScore++

        if (computerScore == 1) {
            return (`Oooops... you lost! 
                    ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
            );
        } else if (computerScore == 2) {
            return (`I am getting worried!
                    ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
            );
        } else if (computerScore == 3) {
            return (`Thats really not ok!! Wake up for life! Come on...
                   ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
            );
        } else if (computerScore == 4) {
            return (`I am almost giving up on you! You lost again baby!
                   ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
            );
        } else {
            return (`You lost!!
                   ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
            );
        }
    } else {
        
        playerScore = playerScore++

        if (playerScore == 1) {
            return (`You won. Very good!
                    ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
            );
        } else if (playerScore == 2) {
            return (`Now we are talking. You are on the right path.
                    ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
            );
        } else if (playerScore == 3) {
            return (`Waw! Almost in love with you.
                    ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
            );
        } else if (playerScore == 4) {
            return (`Yeahhhhhhhhhhhh... You are my hero!
                    ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
            );
        } else {
            return (`You won!! Congratulations.
                   ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`
            );
        }
    }
}
    
/*
//Create a play function
function game (){
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or scissors?").toLowerCase();
        playRound(playerSelection)

     }  
}  
*/   
        
  

 
