export default class Enemy {
    constructor(game, positionWithinWave){
        this.game = game;
        this.positionWithinWave = {
            x: positionWithinWave.x,
            y: positionWithinWave.y
        };
        this.position = {
            x: 0,
            y: 0
        };
        this.width = this.game.enemySize;
        this.height = this.game.enemySize;
        this.markedForDeletion = false;
    }

    update(wavePosition){
        this.position.x = this.positionWithinWave.x + wavePosition.x;
        this.position.y = this.positionWithinWave.y + wavePosition.y;
    }

    draw(ctx){
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }
}