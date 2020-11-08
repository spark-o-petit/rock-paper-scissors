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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound(0,computerPlay());
});

const paper = document.querySelector('#paper');
rock.addEventListener('click', () => {
    playRound(1,computerPlay());
});

const scissor = document.querySelector('#scissor');
rock.addEventListener('click', () => {
    playRound(2,computerPlay());
});