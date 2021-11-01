// create a function computerPlay
function computerPlay(){
    // In funtion create an array containing the choices that the computer can choose from
    let computerOption = ['Rock', 'Paper', 'Scissors']
    // randomly choose one of the elements in array
    let computerChoice = computerOption[Math.floor(Math.random()*computerOption.length)];
    // return the choice to the caller
    return computerChoice;
}

// create the function playRound that takes two parameter computerSelection and playerSelection
function playRound(computerSelection, playerSelection){
    // check if the PlayerSelection is Rock, Paper, or Scissors
    if(playerSelection === 'Rock' || playerSelection === 'Paper'|| playerSelection === 'Scissors'){
        // check if computerSelection == playerSelection and tell user it is a tie
        if(playerSelection === computerSelection){
            return 'draw';
        }
        // check if playerSelection == rock and computerSelection == scissors then player wins
        else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
            return 'user'; 
        }
        // check if playerSelection == paper and computerSelection == rock then player has won
        else if (playerSelection === 'Paper' && computerSelection === 'Rock'){
            return 'user';
        }
        // check if playerSelection == scissors and compterSelection == paper then player has won
        else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
            return 'user'           
        }
        else{
            return 'computer';
        }
    }
    // else tell user the input is invalid
    else{
        alert(`You entered an invalid input!
        THE GAME WILL NOW TERMINATE`);
        return 'invalid';
    }
}


function game(){
    let userCount = 0,
    computerCount = 0;
    let playerMessage = alert(`Dear Player,
You are about to player a game of Rock Paper or Scissors against the computer.`);
    for(let i = 0; i < 5; i++){
        // create a variable computerSelection that calls the computerPlay function
        const computerSelection = computerPlay();
        // create a variable that asks the user to type their choice
        let playerQuery = prompt(`To play type your choice and press enter or click ok`, 'Rock');
        // convert the user choice to lowerCase
        let playerInput = playerQuery.toLowerCase();
        // convert the first letter of user choice to Upercase and store the result in playerSelection
        let convertToUppercase = playerInput[0].toUpperCase();
        const playerSelection = playerInput.replace(playerInput[0], convertToUppercase);
        // call the playRound function
        let result = playRound(computerSelection, playerSelection);
        
        if(result === 'draw'){
            alert(`You have draw the round! ${playerSelection} is the same as ${computerSelection}
            PlayerScore: ${userCount}  ComputerScore: ${computerCount}`);
        }else if(result === 'invalid'){
            break;
        }else if(result === 'user'){
            userCount++;
            alert(`You have won this round! ${playerSelection} beats ${computerSelection}
            PlayerScore: ${userCount}  ComputerScore: ${computerCount}`)
            
        }else{
            computerCount++;
            alert(`You lost this round! ${computerSelection} beats ${playerSelection}
            PlayerScore: ${userCount}  ComputerScore: ${computerCount}`)
            
        }
    }
    if(userCount === computerCount){
        alert(`You have Drawn the Game
        PlayerScore: ${userCount}  ComputerScore: ${computerCount}`)

    }else if(userCount > computerCount){
        alert(`You Won the Game
        PlayerScore: ${userCount}  ComputerScore: ${computerCount}`)
    }else{
        alert(`The Computer Beat You
        PlayerScore: ${userCount}  ComputerScore: ${computerCount}`)
    }

}

let playgame = game();