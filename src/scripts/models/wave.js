import Enemy from "./enemy.js";

export default class Wave{
    constructor(game){
        this.game = game;
        this.width = this.game.enemyColumns * this.game.enemySize;
        this.height = this.game.enemyRows * this.game.enemySize;
        this.position = {
            x: this.game.width / 2 - this.width / 2,
            y: -this.height
        };
        this.speed = {
            x: Math.random() < 0.5 ? -1 : 1,
            y: 0
        };
        this.enemies = [];       
        this.createEnemies(); 
    }

    isCollidingWithBorders(){
        return this.position.x < 0 || this.position.x > this.game.width - this.width;
    }

    createEnemies(){
        for(let row = 0; row < this.game.enemyRows; row++){
            for(let col = 0; col < this.game.enemyColumns; col++){
                let enemyPositionWithinWave = {
                    x: col * this.game.enemySize,
                    y: row * this.game.enemySize
                };
                this.enemies.push(new Enemy(this.game, enemyPositionWithinWave));

            }
        }
    }

    updateEnemies(){
        this.enemies.forEach(enemy => {
            enemy.update(this.position);
        });
    }

    update(){
        if(this.position.y < 0){
            this.position.y += 5;
        }
        this.speed.y = 0;
        if(this.isCollidingWithBorders()){
            this.speed.x *= -1;
            this.speed.y = this.game.enemySize;
        }
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);    
        this.updateEnemies();
    }

    draw(ctx){
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
        this.enemies.forEach(enemy => {
            enemy.draw(ctx);
        });
    }
}