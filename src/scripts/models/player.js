export default class Player{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.position = {
            x: 0,
            y: this.game.height - this.height
        }
        this.speedX = 0;
    }

    update(){
        this.position.x += this.speedX;
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}