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
        this.speedModifier = 3;
    }

    isLeftBoundary(){
        return this.position.x < 0;
    }

    isRightBoundary(){
        return this.position.x + this.width > this.game.width;
    }

    handleBoudaries(){
         if(this.isLeftBoundary()){
            this.position.x = 0;
        }
        else if(this.isRightBoundary()){
            this.position.x = this.game.width - this.width;
        }
    }

    update(){
        this.position.x += (this.speedX * this.speedModifier);
        this.handleBoudaries();
    }

    draw(ctx){
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}