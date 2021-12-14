let deckId = "";
let computerScore = 0;
let myScore = 0;
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");

function handleClick() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            remainingText.innerText = `Reamining Cards: ${data.remaining}`;
            deckId = data.deck_id;
        });      
}
newDeckBtn.addEventListener("click", handleClick);

drawCardBtn.addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        remainingText.innerText = `Reamining Cards: ${data.remaining}`;
        cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card" />`
        cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class="card" />`
        const winnerText = determineCardWinner(data.cards[0].value, data.cards[1].value);
        header.innerText = winnerText;
        if (data.remaining === 0) {
            drawCardBtn.disabled = true;
            if (computerScore > myScore) {
                header.textContent = "The computer won the game!"
            } else if (myScore > computerScore) {
                header.textContent = "You won the game!"
            } else {
                header.textContent = "It's a tie game!"
            } 
        }
    });
});
            
function determineCardWinner(card1, card2) {
    const valueOption = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"];
    const card1ValueIndex = valueOption.indexOf(card1);
    const card2ValueIndex = valueOption.indexOf(card2);
    let message = "";
    if (card1ValueIndex === card2ValueIndex) {
        message = "War!";
    } else if (card1ValueIndex > card2ValueIndex) {
        message = "Computer wins!";
        computerScore += 1;
        computerScoreEl.innerText = `Computer Score: ${computerScore}`;
    } else {
        message = "You win!";
        myScore += 1;
        myScoreEl.innerText = `My score: ${myScore}`
    }
    return message;
}