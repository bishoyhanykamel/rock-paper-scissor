"use strict";

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 100) + 1;
    if (randomValue <= 30) return 'Rock';
    if (randomValue <= 60) return 'Paper';
    return 'Scissors';
}


