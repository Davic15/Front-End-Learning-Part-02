let count = 0;
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

function increment() {
    countEl.textContent = count += 1;
}

function save() {
    let counter = count + " - ";
    saveEl.textContent += counter;
    count = 0;
    countEl.textContent = 0;
}