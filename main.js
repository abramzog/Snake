const board = document.getElementById("board");
const ctx = board.getContext("2d");
const cube = 25;
const row = board.height/cube;
const col = board.width/cube;
let timeInterval = 250;
let status = true;
const snake = new Snake();
const food = new Food();

const title = document.getElementById("score_title");
title.innerHTML = "Score: " + (snake.score - 1);

(function init(){
    snake.draw();
}());

const intervalHandler = function (){
    updateSnake();
    draw();
    caught();
}

const caught = function(){
    if(snake.caught(food)){
        title.innerHTML = "Score: " + (snake.score - 1);
        food.update();
        updateSnake();
        if(snake.score % 5 === 0){
            timeInterval = timeInterval * 0.9;
        }
    }
}

const updateSnake = function() {
    if(snake.update()){
        window.clearInterval(interval);
    }
}

const draw = function(){
    ctx.clearRect(0,0,board.width, board.height);
    food.draw(); 
    snake.draw();
}

const interval = window.setInterval(intervalHandler, timeInterval);

window.addEventListener('keydown', (event =>{
    if(event.key === "Escape"){
        status = !status;
        if(status){
            interval = window.setInterval(intervalHandler, timeInterval);
        }
        else{
            window.clearInterval(interval);
        }
    }
    snake.changeDirection(event.key);
}))