// Declare global variables
window.onload = begginningAnimation();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const container = document.querySelector("#results-container")
const endAlert = document.querySelector("#end-alert")
const endDesc = document.querySelector("#end-desc")
const returnMainBtn = document.querySelector("#retry-btn")
const desc = document.querySelector("#desc3")


//skip the animation when clicking on the window
body.addEventListener("click", skipAnime)
body.addEventListener("keydown", skipAnime)

function skipAnime() {
    const span = document.querySelectorAll("span");
    span.forEach((span) => span.classList.add("skip"));
}

//animation
function begginningAnimation() {
    fadeIn();

    //turn span list into array
    const desc1 = document.querySelector("#desc1");
    let desc1Span = desc1.querySelectorAll("span");
    
    desc1Span = Array.from(desc1Span);
    
    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");

    desc1Span[desc1Span.length - 1].ontransitionend = () => {
        desc1.classList.add("fade-out");

        desc1.addEventListener("animationend", () => {
            desc1.classList.add("disappear");
            desc1.classList.remove("animate");
            desc2.classList.remove("disappear");
            desc2.classList.add("animate");
            fadeIn();

            //collect nodelist of span 
            let desc2Span = desc2.querySelectorAll("span");
            desc2Span = Array.from(desc2Span);

            desc2Span[desc2Span.length - 1].ontransitionend = () => {
                desc2.classList.add("fade-out");
                desc2.addEventListener("animationend", () => {
                    desc2.classList.add("disappear");
                    desc2.classList.remove("animate");
                    desc3.classList.remove("disappear");
                    desc3.classList.add("animate");
                    fadeIn();

                    let desc3Span = desc3.querySelectorAll("span");
                    desc3Span = Array.from(desc3Span);

                    desc3Span[desc3Span.length - 1].ontransitionend = () => {
                        const cta = document.querySelector("#cta");

                        cta.classList.add("drop-down");

                        cta.addEventListener("animationend", () => {
                            const gameCtn = document.querySelector( "#game-container");

                            setTimeout(function () {
                                gameCtn.classList.add("fade-in");
                            }, 300);
                        });
                    };

                });
            };
        });
    
    };
}


//fading in the letters
function fadeIn() {
    let text = document.querySelector(".animate");
    let strText = text.textContent;
    let splitText = strText.split("");
    text.textContent = "";

    //append span tags to each charactere in the string
    for (i = 0; i < splitText.length; i++) {
        text.innerHTML += `<span>${splitText[i]}</span>`;
    }

    let char = 0;
    let timer = setInterval(onTick, 30);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add("fade");
        char++;
        //stop the function from running once the end of the string has been reached
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
      }
}

//buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img")
        playerSelection = img.alt.toLowerCase();

        playRound(playerSelection, computerSelection);

        if (playerScore == 5 || computerScore == 5) {
            declareWinner();
        }
    })
})
//function to capitalize a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// generate a random value from myArray
function computerPlay () {
    const myArray = ["Rock", "Paper", "Scissors"]
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// play Rock Scissor Paper
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    // test the options 
    if (computerSelection == playerSelection) {
        displayResults ("Tie game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
        ) {

        computerScore = ++computerScore
        keepCpuScore();

        if (computerScore == 1) {
            displayResults (`Oooops... you lost! 
                    ${capitalize(computerSelection)} beats ${playerSelection}`
            );
        } else if (computerScore == 2) {
            displayResults (`I am getting worried!
                    ${capitalize(computerSelection)} beats ${playerSelection}`
            );
        } else if (computerScore == 3) {
            displayResults (`Thats really not ok!! Wake up for life! Come on...
                   ${capitalize(computerSelection)} beats ${playerSelection}`
            );
        } else if (computerScore == 4) {
            displayResults (`I am almost giving up on you! You lost again baby!
                   ${capitalize(computerSelection)} beats ${playerSelection}`
            );
        } else {
            displayResults (`You definitely lost!!
                   ${capitalize(computerSelection)} beats ${playerSelection}`
            );
        }
    } else {

        playerScore = ++playerScore;
        keepPlayerScore();

        if (playerScore == 1) {
            displayResults (`You won. Very good!
                    ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore == 2) {
            displayResults (`Now we are talking. You are on the right path.
                    ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore == 3) {
            displayResults (`Waw! Almost in love with you.
                    ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore == 4) {
            displayResults (`Yeahhhhhhhhhhhh... You are my hero!
                    ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else {
            displayResults (`You won!! Congratulations.
                   ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        }
    }
}

function displayResults(str) {
    container.animate([{opacity: 0}, {opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out", 
    });
    container.textContent = str;
}

function declareWinner() {
    rplContent();
    if (playerScore > computerScore) {
        endDesc.textContent = "You win! Yuuuupiiiii...";
        returnMainBtn.innerText = "Play again";    
    } else {
        endDesc.textContent = "You lost! Shame on you motherfucker...";
        returnMainBtn.innerText = "Try again";    
    }
    fadeIn();

    let endDescSpan = endDesc.querySelectorAll("span");
  endDescSpan = Array.from(endDescSpan);

  endDescSpan[endDescSpan.length - 1].ontransitionend = () => {
    returnMainBtn.classList.add("fade-in");
    /*returnMainBtn.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 00,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-in",
    });*/
  };
}

function rplContent() {
    main.classList.add("disappear");
    endAlert.classList.remove("disappear");
    desc.classList.remove("animate");
    endDesc.classList.add("animate");

    returnMainBtn.addEventListener("click", () => {
        main.classList.remove("disappear");
        endAlert.classList.add("disappear");
        desc.classList.add("animate");
        returnMainBtn.classList.remove("fade-in");
        resetGame()
    })
}

function resetGame() {
    fadeIn();
    container.textContent = "";
    playerScore = 0;
    computerScore = 0;
    keepPlayerScore();
    keepCpuScore();
}

function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
  
    playerScoreBox.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards",
      iterations: 1,
      delay: 0,
      easing: "ease-out",
    });
  
    playerScoreBox.textContent = playerScore;
  }

function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computer-score");

    computerScoreBox.animate([{ opacity: 0}, { opacity: 1}], {
        duration: 300,
        fill: "forwards",
        iterations: 1,
        delay: 0,
        easing: "ease-out",
    });

    computerScoreBox.textContent = computerScore;
}
//begginningAnimation();

    
