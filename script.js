const myArray = ["Rock", "Paper", "Scissors"]

// generate a random value from myArray
function getComputerChoice () {
    return myArray[Math.floor(Math.random() * myArray.length)];
}



