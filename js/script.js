const computerOption = ['Rock', 'Paper', 'Scissors'];
const playerOptions = document.querySelectorAll('[data-selection]');
let playerSelection, computerSelection;
let playerScore = 0;
let computerScore = 0;
let playerScoreOut = document.querySelector('#playerScore');
let computerScoreOut = document.querySelector('#computerScore');
let message = document.querySelector('#message');
let playerChoice = document.querySelector('#playerSelection');
let computerChoice = document.querySelector('#computerSelection');
let restart = document.querySelector('#restart');

function computerPlay(){
    return computerOption[Math.floor(Math.random() * 3)];
}

// playround plays the role of game() as well
function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    if(playerScore !== 5 && computerScore < 5 || computerScore !== 5 && playerScore < 5){
        if(playerSelection === 'Rock'&& computerSelection === 'Scissors'||
           playerSelection === 'Scissors' && computerSelection === 'Paper'||
           playerSelection === 'Paper' && computerSelection === 'Rock'){

            playerScore += 1;
            playerChoice.textContent = playerSelection;
            computerChoice.textContent = computerSelection;
                if(playerScore ===5 && computerScore < playerScore){
                    message.textContent = `You Won! You are the First to 5 points.`;
                    message.style.color = 'green';
                }else
                    message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        }else if(computerSelection === 'Rock'&& playerSelection === 'Scissors'||
                 computerSelection === 'Scissors' && playerSelection === 'Paper'||
                 computerSelection === 'Paper' && playerSelection === 'Rock'){

                    computerScore += 1;
                    playerChoice.textContent = playerSelection;
                    computerChoice.textContent = computerSelection;
            
            if(computerScore === 5 && playerScore < computerScore){
                message.textContent = `You Lost! The Computer was First to 5 points.`;
                message.style.color = 'red';
            }else
                message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }else if(playerSelection === computerSelection){

            playerChoice.textContent = playerSelection;
            computerChoice.textContent = computerSelection;
            message.textContent = `It's a Tie! ${playerSelection} equals ${computerSelection}`;
        }
    }
}

// Adds event listener to playing buttons
playerOptions.forEach(playerSelection =>{
    playerSelection.addEventListener('click', playerSelection =>{
        playerSelection = playerSelection.target.id;
        playRound(playerSelection, computerSelection);
        if(computerScore < playerScore && playerScore <= 5 ||
            playerScore < computerScore && computerScore <= 5){
            playerScoreOut.textContent = playerScore;
            computerScoreOut.textContent = computerScore;
        }
        
    });
});

// Resets the score and restarts game
restart.addEventListener('click', ()=>{
    playerScore = 0;
    computerScore = 0;
    playerScoreOut.textContent = 0, computerScoreOut.textContent = 0;
    playerChoice.textContent = '❔';
    computerChoice.textContent = '❔';
    message.style.color = 'black';
    message.textContent = 'Winner of round gets shown here';
});