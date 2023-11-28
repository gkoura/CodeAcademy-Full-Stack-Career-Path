let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.ceil(Math.random()*9)
}

function compareGuesses(human, computer, target = generateTarget()) {

    if (Math.abs(human-target) <= Math.abs(computer-target)) {
        return true
    } else {
        return false 
    }
}

function updateScore(str) {
    if (str === "human") {
        humanScore++;
    } else if (str === "computer") {
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++
}