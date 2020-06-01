const board = document.getElementById("board");
const ctx = board.getContext("2d");
const cube = 25;
const row = board.height/cube;
const col = board.width/cube;
var timeInterval = 250;
let status = false;

var snake = new Snake();
var food = new Food(snake);

var title = document.getElementById("score_title");
title.innerHTML = "Score: " + (snake.score - 1);

(function init(){
    snake.draw();
}());

var intervalHander = function (){
    status = true;
    ctx.clearRect(0,0,board.width, board.height);
    if(snake.update()){
        window.clearInterval(interval);
    }
    food.draw(); 
    snake.draw();
    if(snake.caught(food)){
        title.innerHTML = "Score: " + (snake.score - 1);
        food.update();
        if(snake.update()){
            window.clearInterval(interval);
            status = false;
        }
        if(snake.score % 5 === 0){
            timeInterval = timeInterval * 0.9;
        }
    }
}

let interval = window.setInterval(intervalHander, timeInterval);

window.addEventListener('keydown', (event =>{
    if(event.key === "Escape"){
        status = !status;
        if(status){
            interval = window.setInterval(intervalHander, timeInterval);
        }
        else{
            window.clearInterval(interval);
        }
    }
    snake.changeDirection(event.key);
}))











