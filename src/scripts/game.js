import Player from "./models/player.js";
import InputHandler from "./models/utils/input.js";

export default class Game{
    constructor(canvas){
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;

        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);
    }

    update(){
        this.player.update();
    }

    draw(ctx){
        this.player.draw(ctx);
    }
}