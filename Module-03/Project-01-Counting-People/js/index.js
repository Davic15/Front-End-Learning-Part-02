let count = 0;
let countEl = document.getElementById('count-el');

function increment() {
    countEl.innerHTML = count += 1;
}

function save() {
    console.log(count);
}