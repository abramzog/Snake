class Snake{
    constructor() {
        this.x = board.height/2;
        this.y = board.width/2;
        this.xAxis = cube;
        this.yAxis = 0;
        this.score = 1;
        this.tail = [];
        this.lastX;
        this.lastY;
    }
    
    update() {
        this.x += this.xAxis;
        this.y += this.yAxis;
        this.checkBorders();
        this.updateTail();
        return this.endGame();
            
    }

    checkBorders() {
        if(this.x >= board.width) {
            this.x = 0;
        } else if(this.x < 0) {
                this.x = board.width - cube;
            } else if(this.y >= board.height) {
                    this.y = 0;
                } else if(this.y < 0) {                    
                        this.y = board.height - cube;
                    }
    }

    updateTail() {
        for(let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.score - 1] = {x : this.x, y : this.y};
    }

    draw() {
        ctx.fillStyle = "#b3ffb3";
        for(let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, cube , cube);
        }
        ctx.fillStyle = "#008000";
        ctx.fillRect(this.x, this.y, cube , cube);
    }

    changeDirection(key) {
        switch(key) {
            case "ArrowUp":
                if(this.yAxis !== 0)
                    break;
                this.xAxis = 0;
                this.yAxis = -cube;  
                break;
            case "ArrowDown":
                if(this.yAxis !== 0)
                    break;
                this.xAxis = 0;
                this.yAxis = cube;
              break;

            case "ArrowRight":
                if(this.xAxis !== 0)
                    break;
                this.xAxis = cube;
                this.yAxis = 0;
                break;
            case "ArrowLeft":
                if(this.xAxis !== 0)
                    break;
                this.xAxis = -cube;
                this.yAxis = 0;
                break;
          }
    }

    caught(food) {
        if (this.x === food.x && this.y === food.y) {
            this.score++;
            return true;
        }
        return false;
    }

    endGame() {
        for(let i = 0; i < this.tail.length - 1; i++) {
            if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
                return true;
            }
        }
        return false;
    }
}

