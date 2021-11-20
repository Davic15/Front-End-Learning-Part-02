const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const scoreDisplay = document.getElementById("score");
let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;

function createGrid() {
    // create 1-- of these elements with a for loop
    for (let i = 0; i < width * width; i++) {
        // create element
        const square = document.createElement("div");
        // add styling to the element
        square.classList.add("square")
        // put the element into our grid
        grid.appendChild(square);
        // push it into a new square array
        squares.push(square);
    }
}
createGrid();
currentSnake.forEach(index => squares[index].classList.add("snake"));

function startGame() {
    // remove the snake

    // remove the apple

    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0
    // re-add new score to browser
    direction = 1
    intervalTime = 1000
    generateApples()
    // re-add the class of snake to out new currentSnake
    timerId = setInterval(move, intervalTime);
}

function move() {
    if (
        // if snake has hit bottom
        (currentSnake[0] + width >= width * width && direction === width)  ||
        // if snake has hit the right wall
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        // if snake has hit the left wall
        (currentSnake[0] % width === 0 && direction === - 1) ||
        // if snake has hit top
        (currentSnake[0] - width < 0 && direction === -width) ||
        // snake hits itself
        squares[currentSnake[0] + direction].classList.contains("snake")
    )
        return clearInterval(timerId);
    // remove last element from out currentSnake array
    const tail = currentSnake.pop();
    // remove styling from last element
    squares[tail].classList.remove("snake");
    // add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction);
   
    // deal with snake head getting the apple
    if (squares[currentSnake[0]].classList.contains("apple")) {
        // remove the class of apple
        squares[currentSnake[0]].classList.remove('apple');
        // grow our snake by adding class of snake to it
        squares[tail].classList.add("snake");
        // grow our snake array
        currentSnake.push(tail);
        // generate a new apple
        generateApples();
        // add one to the score
        score++;
        // display our score
        scoreDisplay.textContent = score;
        // speed up our snake
        clearInterval(timerId);
        intervalTime = intervalTime * speed;
        timerId = setInterval(move, intervalTime);
    }
    // add styling so we can see it
    squares[currentSnake[0]].classList.add("snake");
}

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while(squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
}
generateApples();

function control(e) {
    switch (e.keyCode) {
        case 37:
            console.log("left");
            direction = -1;
            break;
        case 38:
            console.log("up");
            direction = -width;
            break;
        case 39:
            console.log("right");
            direction = 1;
            break;
        case 40:
            console.log("down");
            direction = +width;
            break;
        default: 
            console.log("Error");
            break;
    }
}

document.addEventListener("keyup", control);
startButton.addEventListener("click", startGame);