let userInput = 'rock';

const getUserChoice = userInput => {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
        return userInput;
    } else {
        console.log('Error!Wrong Input.');
    }
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3);
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
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won';
        }
    }
}

const playGame = () => {
    const userChoice        = getUserChoice();
    const computerChoice    = getComputerChoice();
    console.log(`You throw:${userChoice}`);
    console.log(`The computer throw:${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();