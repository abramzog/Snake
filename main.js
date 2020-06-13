const board = document.getElementById("board");
const ctx = board.getContext("2d");
const cube = 25;
const row = board.height/cube;
const col = board.width/cube;
let timeInterval = 150;
let status = true;
let snake = new Snake();
let food = new Food();

const title = document.getElementById("score_title");
title.innerHTML = "Score: " + (snake.score - 1);


(function init() {
    snake.draw();
}());

const intervalHandler = function () {
    if(updateSnake()) {
        draw();
        caught();
    }
}

const caught = function() {
    if(snake.caught(food)) {
        title.innerHTML = "Score: " + (snake.score - 1);
        food.update();
        updateSnake();
        if(snake.score % 5 === 0) {
            timeInterval = timeInterval * 0.9;
        }
    }
}

const updateSnake = function() {
    if(snake.update()) {
        window.clearInterval(interval);
        ctx.clearRect(0,0,board.width, board.height);
        snake.draw();
        window.setTimeout(() => {
            document.getElementById("game_over_score").innerText = "Your Score was:  " + (snake.score-1);
            document.getElementById("game_over_modal").style.display = "block";
        }, 1000);
        return false;
    }
    return true;
}

const draw = function() {
    ctx.clearRect(0,0,board.width, board.height);
    food.draw(); 
    snake.draw();
}

let interval = window.setInterval(intervalHandler, timeInterval);

window.addEventListener('keydown', (event => {
    if(event.key === "Escape") {
        status = !status;
        if(status) {
            interval = window.setInterval(intervalHandler, timeInterval);
        }
        else{
            window.clearInterval(interval);
        }
    }
    snake.changeDirection(event.key);
}))
''
reset = () => {
    snake = new Snake();
    food = new Food();
    timeInterval = 150;
    title.innerHTML = "Score: " + (snake.score - 1);
    draw();
    document.getElementById("game_over_modal").style.display = "none";
    interval = window.setInterval(intervalHandler, timeInterval);
}