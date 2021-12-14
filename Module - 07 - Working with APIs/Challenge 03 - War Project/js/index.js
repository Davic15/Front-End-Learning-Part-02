let deckId = "";
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining")

function handleClick() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            remainingText.innerText = `Reamining Cards: ${data.remaining}`;
            deckId = data.deck_id;
        });      
}
newDeckBtn.addEventListener("click", handleClick)
drawCardBtn.addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        remainingText.innerText = `Reamining Cards: ${data.remaining}`;
        cardsContainer.children[0].innerHTML = `<img src=${data.cards[0].image} class="card" />`
        cardsContainer.children[1].innerHTML = `<img src=${data.cards[1].image} class="card" />`
        const winnerText = determineCardWinner(data.cards[0].value, data.cards[1].value);
        header.innerText = winnerText;
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
        message = "Card 1 wins!";
    } else {
        message = "Card 2 wins!";
    }
    return message;
}
