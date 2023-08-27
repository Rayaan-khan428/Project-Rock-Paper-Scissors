console.log("Hello World");

function getComputerChoice() {

    let num = Math.floor(Math.random() * (3));
    let ans = '';

    if (num === 0) {
        ans = 'rock';
    } else if (num === 1) {
        ans = 'paper';
    } else if (num === 2) {
        ans = 'scissors';
    }

    return ans;

}

function playRound(computerSelection, player) {

    let outcome = '';
    
    if (computerSelection == player) {
        outcome = 'Tie!';
    }

    // If playerSelection is Rock
    if (player === 'rock' && computerSelection === 'paper') {
        outcome = 'You Lose! Rock beats Paper';
        computerScore++;
    } else if (player === 'rock' && computerSelection === 'scissors') {
        outcome = 'You Win! Rock beats Scissors';
        playerScore++;
    } 

    // If playerSelection is Scissors
    if (player === 'scissors' && computerSelection === 'paper') {
        outcome = 'You Win! Scissors beats Paper';
        playerScore++;
    } else if (player === 'scissors' && computerSelection === 'rock') {
        outcome = 'You Loose! Scissors beats Rock';
        computerScore++;
    } 
    
    // If playerSelection is Paper
    if (player === 'paper' && computerSelection === 'scissors') {
        outcome = 'You Loose! Paper beats Scissors';
        computerScore++;
    } else if (player === 'paper' && computerSelection === 'rock') {
        outcome = 'You Win! Paper beats Rock';
        playerScore++;
    }

    return outcome;

}

function game() {
    
    for (let index=0; index < 5; index++) {
        const playerSelection = prompt("enter choice: ");
        const computerSelection = getComputerChoice()
        console.log(playRound(computerSelection, playerSelection));
    }

    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

}

let playerScore = 0;
let computerScore = 0;




game();




