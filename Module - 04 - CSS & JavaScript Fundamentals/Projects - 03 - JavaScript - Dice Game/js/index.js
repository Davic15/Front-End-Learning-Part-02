/* Create variables for the game state */
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

/* Create variables to store references to the necessary DOM nodes */
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");

//player1Dice.classList.remove("active");

rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;


    if (player1Turn){
        player1Dice.textContent = randomNumber;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
        player1Scoreboard.textContent = randomNumber;
    } else {
        player2Dice.textContent = randomNumber;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
        player2Scoreboard.textContent = randomNumber;
    }
    player1Turn = !player1Turn;
});

