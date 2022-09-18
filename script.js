"use strict";

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const TIE = 'Tie!';

let getComputerChoice = function() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    if (randomValue <= 30) return ROCK;
    if (randomValue <= 60) return PAPER;
    return SCISSORS;
}

function getPlayerChoice() {
    let userChoice = undefined;
    do {
        userChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    } while (userChoice !== ROCK && userChoice !== PAPER && userChoice !== SCISSORS);
    return userChoice;
}


function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return TIE;
    switch (playerChoice) {
        case ROCK:
            if (computerChoice === SCISSORS)
                return true;
            else
                return false;
            break;

        case PAPER:
            if (computerChoice === ROCK)
                return true;
            else
                return false;
        
        case SCISSORS:
            if (computerChoice === PAPER)
                return true;
            else
                return false;

        default:
            return undefined;
    }
}


function playRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {
    let playerWon = getWinner(playerChoice, computerChoice);
    if (playerWon === TIE) return console.log(`${TIE}`);
    playerWon ? console.log(`You win! ${playerChoice} beats ${computerChoice}`) : console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
}
