import CollisionDetector from "../utils/collisionDetector.js";

export default class Enemy {
    constructor(game, positionWithinWave){
        this.game = game;
        this.collisionDetector = new CollisionDetector();
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

    //some() stops iterating as soon as it finds the first true, and returns true/false for the whole call . 
    // See https://claude.ai/chat/a79795f2-9bee-4aac-995b-035a84e8539c
    // isShot(){
    //     return this.game.projectilesPool.some(projectile => {
    //         return this.collisionDetector.detectRectCollision(projectile, this);
    //     });
    // }

    isShot(){
        this.game.projectilesPool.forEach(projectile => {
            if(!projectile.free && this.collisionDetector.detectRectCollision(projectile, this)){
                projectile.reset();
                this.markedForDeletion = true;
                console.log('enemy::isShot(). projectile: ', projectile)
            }
        });
    }

    update(wavePosition){
        this.position.x = this.positionWithinWave.x + wavePosition.x;
        this.position.y = this.positionWithinWave.y + wavePosition.y;

        this.isShot();
        // if(this.isShot()){
        //     this.markedForDeletion = true;
        // }
    }

    draw(ctx){
        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height);
    }
}