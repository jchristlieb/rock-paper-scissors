'use strict';

var userInput = 'rock';

var getUserChoice = function getUserChoice(userInput) {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error!Wrong Input.');
    }
};

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Game is a tie. No winner';
    }if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    }if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    }if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    }
}

var playGame = function playGame() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    console.log('You throw:' + userChoice);
    console.log('The computer throw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();