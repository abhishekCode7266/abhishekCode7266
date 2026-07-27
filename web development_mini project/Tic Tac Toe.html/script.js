const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const alertBox = document.querySelector(".alertBox");

const currentPlayer = "X";
const nextPlayer = "O";
let playerTurn = currentPlayer;

player1.textContent = `Player 1 : ${currentPlayer}`;
player2.textContent = `Player 2 : ${nextPlayer}`;

function startGame() {
    gameCells.forEach(cell => {
        cell.addEventListener("click", handleClick);
    });

    showAlert(`Turn: ${playerTurn}`);
}

function handleClick(e) {

    const cell = e.target;

    if (cell.textContent !== "") {
        return;
    }

    cell.textContent = playerTurn;

    if (checkWin()) {
        showAlert(`${playerTurn} is the Winner!`);
        disableCells();
        return;
    }

    if (checkTie()) {
        showAlert("It's a Tie!");
        disableCells();
        return;
    }

    changePlayerTurn();
    showAlert(`Turn: ${playerTurn}`);
}

// Change Player
function changePlayerTurn() {
    playerTurn =
        playerTurn === currentPlayer
            ? nextPlayer
            : currentPlayer;
}

// Check Winner
function checkWin() {
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
        const [pos1, pos2, pos3] = winningConditions[i];
        if (
            gameCells[pos1].textContent !== "" &&
            gameCells[pos1].textContent === gameCells[pos2].textContent &&
            gameCells[pos2].textContent === gameCells[pos3].textContent
        ) {
            return true;
        }
    }
    return false;
}

// Check Tie
function checkTie() {
    let emptyCells = 0;
    gameCells.forEach(cell => {
        if (cell.textContent === "") {
            emptyCells++;
        }
    });
    return emptyCells === 0;
}

// Disable Cells
function disableCells() {
    gameCells.forEach(cell => {
        cell.removeEventListener("click", handleClick);
        cell.classList.add("disabled");
    });
}

// Restart Game
function restartGame() {
    playerTurn = currentPlayer;
    gameCells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("disabled");
    });
    alertBox.style.display = "none";
    startGame();
}

// Alert
function showAlert(message) {
    alertBox.textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);

}

// Restart Button
restartBtn.addEventListener("click", restartGame);

// Start
startGame();                                                                                                                  


