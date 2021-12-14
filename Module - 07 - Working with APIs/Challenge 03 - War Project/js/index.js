let deckId = "";

function handleClick() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id;
            console.log(deckId)
        });      
}
document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw-cards").addEventListener("click", () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        console.log (data);
        let images = `
            <img src="${data.cards[0].image}"> 
            <img src="${data.cards[1].image}">
        `
        document.getElementById("cards").innerHTML = images

    });
});

            