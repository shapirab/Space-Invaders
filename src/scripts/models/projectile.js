export default class Projectile{
    constructor(){
        this.width = 3;
        this.height = 20;
        this.position = {
            x: 0,
            y: 0
        }
        this.speedY = 5;
        this.free = true;
    }

    start(position){
        this.free = false;
        this.position.x = position.x - this.width / 2;
        this.position.y = position.y;
    }

    reset(){
        this.free = true;
    }

    update(){
        if(!this.free){
            this.position.y -= this.speedY;
        }
        if(this.position.y < -this.height){
            this.reset();
        }
    }

    draw(ctx){
        if(!this.free){
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}