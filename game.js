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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id,computerPlay());
    })
})