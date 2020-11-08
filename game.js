function computerPlay () {
   let computerChoice = Math.floor( Math.random()*3);
   return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    let selectionIndex = 3 + playerSelection - computerSelection;
    switch (selectionIndex % 3) {
        case 0:
            console.log("Draw!");
            break;
        case 1:
            console.log("Win!");
            playerScored();
            break;
        case 2:
            console.log("Lose!");
            computerScored();
            break;
        default:
            break;
    };

    if (Number(document.getElementById('playerScore').textContent)==5) {
        alert("You won the match!!")        
        resetScore();
    } else if (Number(document.getElementById('computerScore').textContent)==5) {
        alert("Computer won the match!!");
        resetScore();
    }
}

function playerScored () {
    let playerWin = Number(document.getElementById('playerScore').textContent) + 1;
    document.getElementById('playerScore').textContent=playerWin;
}

function computerScored () {
    let computerWin = Number(document.getElementById('computerScore').textContent) + 1;
    document.getElementById('computerScore').textContent=computerWin;
}

function resetScore () {
    document.getElementById('playerScore').textContent=0;
    document.getElementById('computerScore').textContent=0;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id,computerPlay());
    })
})