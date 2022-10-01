"use strict";

// constant strings for comparison
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const TIE = 'Tie!';

// DOM elements selection
const playerOptions = document.querySelectorAll('#player div');
const computerOptions = document.querySelectorAll('#computer div');
const playerScoreText = document.querySelector('.player-right p');
const computerScoreText = document.querySelector('.player-left p');
const playerWinText = document.querySelector('#player-win-text');
const computerWinText = document.querySelector('#pc-win-text');

// global players score
let playerWins = 0, computerWins = 0, gameEnded = false;



// randomize computer choice
let getComputerChoice = function() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    if (randomValue <= 30) return ROCK;
    if (randomValue <= 60) return PAPER;
    return SCISSORS;
}

// get player choice - console game
function getPlayerChoice() {
    let userChoice = undefined;
    do {
        userChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors'").toLowerCase();
    } while (userChoice !== ROCK && userChoice !== PAPER && userChoice !== SCISSORS);
    return userChoice;

}

// function to compute game winner
function getWinner(playerChoice , computerChoice) {
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

function playRound(pChoice) {
    if (gameEnded === true) return;
    let playerChoice = pChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    let playerWon = getWinner(playerChoice, computerChoice);
    if (playerWon === TIE) {
        console.log('Tie round!');
        return;
    }
    if (playerWon) {
        playerWins++;
        playerScoreText.textContent = playerWins;
        //console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    }
    else {
        computerWins++;
        computerScoreText.textContent = computerWins;
        //console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    }
    computeGameWinner();
}

function computeGameWinner() {
    if (playerWins >= 5) {
        playerWinText.classList.toggle('hidden');
        gameEnded = true;
    }
    else if (computerWins >= 5) {
        computerWinText.classList.toggle('hidden');
        gameEnded = true;
    }
}




//playGame();
playerOptions.forEach( (choice) => {
    choice.addEventListener('click', (e) => {
        e.stopPropagation();
        let pChoice = (e.target['alt'] === undefined)? e.target['id'].toLowerCase() : e.target['alt'].toLowerCase();
        playRound(pChoice);
    });
} );

