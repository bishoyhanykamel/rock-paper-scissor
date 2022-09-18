"use strict";

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

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
}
