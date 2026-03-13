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

    handleInputActions(){
        // if(this.inputHandler.keys.down.pressed){
        //     console.log('down pressed');
        // }       
        // if(this.inputHandler.keys.up.pressed){
        //     console.log('up pressed');
        // }
        // if(this.inputHandler.keys.left.pressed){
        //     console.log('left pressed');
        // }
        // if(this.inputHandler.keys.right.pressed){
        //     console.log('right pressed');
        // }
        // if(this.inputHandler.keys.space.pressed){
        //     console.log('space pressed');
        // }
        if(this.inputHandler.keys.right.pressed){
            this.player.speedX = 1;
        }
        else if(this.inputHandler.keys.left.pressed){
            this.player.speedX = -1;
        }
        else{
            this.player.speedX = 0;
        }
    }

    update(){
        this.player.update();
        this.handleInputActions();
        
    }

    draw(ctx){
        this.player.draw(ctx);
    }
}