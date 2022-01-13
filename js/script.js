function computerPlay(){
    let randomNum = Math.floor(Math.random() * (4 - 1)) + 1;
    let computerChoice = '';
    switch (randomNum) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2:
            computerChoice = 'Paper';
            break;
        default:
            computerChoice = 'Scissors';
    }
    return computerChoice;
}

function gamerPlay(id){
    let playerChoice = id;
        let lCase = playerChoice.toLowerCase();
        let fLetterTUpperCase =lCase[0].toUpperCase();
        let finalChoice = fLetterTUpperCase + lCase.slice(1);

        if(finalChoice === 'Rock' || finalChoice === 'Scissors'|| finalChoice === 'Paper'){
            return finalChoice;
        }else{
            return 'ERROR';
        }
    
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'ERROR'){
        return 'ERROR';
    }else{
        if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }else if(playerSelection === computerSelection){
            return `It's a Tie! ${playerSelection} is the same as ${computerSelection}`;
        }else{
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

// function getWinner(playerScore, computerScore){
//     if(playerScore > computerScore){
//         return `You Won the Game! ${playerScore} to ${computerScore}`;
//     }else if(computerScore > playerScore){
//         return `You Lost the Game! ${computerScore} to ${playerScore}`;
//     }else{
//         return `You Drew the Game! ${computerScore} to ${playerScore}`;
//     }
// }

// function game(){
//     let playerScore = 0, computerScore = 0;
//     for(let i = 0; i < 5; i++){
//         const playerSelection = gamerPlay();
//         const computerSelection = computerPlay();
//         const round = playRound(playerSelection, computerSelection);
//         if (round.indexOf('Win') > 0) {
//             playerScore += 1;
//             alert(`${round}\n playerScore: ${playerScore} computerScore: ${computerScore}`);
//         } else if(round.indexOf('Lose') > 0){
//             computerScore += 1;
//             alert(`${round}\n playerScore: ${playerScore} computerScore: ${computerScore}`);
//         }else{
//             alert(`${round}\n playerScore: ${playerScore} computerScore: ${computerScore}`);
//         }
//     }
//     const gameResult = getWinner(playerScore,computerScore);
//     return gameResult;
// }

// let gamePlay = game();
// alert(gamePlay);

const btnOptions = document.querySelectorAll('.btnOption');
btnOptions.forEach((btnOption)=>{
    btnOption.addEventListener('click',()=>{
        const id = btnOption.id;
        const playerSelection = gamerPlay(id);
        const computerSelection = computerPlay();
        const roundWinner = playRound(playerSelection, computerSelection);
        alert(roundWinner);
    });
});