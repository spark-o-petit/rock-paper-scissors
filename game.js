let computerSelection = computerPlay();

function computerPlay () {
   let computerChoice = Math.floor( Math.random()*3);
   return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    let selectionIndex = 3 + playerSelection - computerSelection;
    switch (selectionIndex % 3) {
        case 0:
            console.log("Draw!")
            break;
        case 1:
            console.log("Win!")
            break;
        case 2:
            console.log("Lose!")
            break;
        default:
            break;
    }
}
