function Food(snake) {
    this.x = (Math.floor(Math.random() * col - 1) + 1) * cube;
    this.y = (Math.floor(Math.random() * row - 1) + 1) * cube;

    this.draw = function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect( this.x, this.y, cube , cube);
    }

    this.update = function(){
        this.x = (Math.floor(Math.random() * col - 1) + 1) * cube;
        this.y = (Math.floor(Math.random() * row - 1) + 1) * cube;
    }

   

}