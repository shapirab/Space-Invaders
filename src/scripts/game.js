import Player from "./models/player.js";
import Projectile from "./models/projectile.js";
import Wave from "./models/wave.js";
import InputHandler from "./utils/input.js";
import UI from './utils/ui.js';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    this.player = new Player(this);
    this.inputHandler = new InputHandler(this);

    this.projectilesPool = [];
    this.numOfProjectiles = 10;
    this.createProjectiles();

    this.enemyRows = 2;
    this.enemyColumns = 3;
    this.enemySize = 80;

    this.waves = [];
    this.waves.push(new Wave(this));

    this.ui = new UI(this);

    this.score = 0;
  }

  createProjectiles() {
    for (let i = 0; i < this.numOfProjectiles; i++) {
      this.projectilesPool.push(new Projectile());
    }
  }

  getProjectile() {
    for (let i = 0; i < this.numOfProjectiles; i++) {
      if (this.projectilesPool[i].free) {
        return this.projectilesPool[i];
      }
    }
  }

  isCreateNewWave(){
    for(let i = 0; i < this.waves.length; i++){
      if(this.waves[i].isEmpty()){
        this.waves.splice(i, 1);
        return true;
      }
      if(this.waves[i].position.y > this.height){
        return true;
      }
    }
    return false;
  }

  createNewWave() {
    let increaseChance = Math.random();
    if (increaseChance < 0.5) {
      this.enemyRows *= 2;
    } else {
      this.enemyColumns *= 2;
    }
    this.waves.push(new Wave(this));
  }

  handleInputActions() {
    if (this.inputHandler.keys.right.pressed) {
      this.player.speedX = 1;
    } else if (this.inputHandler.keys.left.pressed) {
      this.player.speedX = -1;
    } else {
      this.player.speedX = 0;
    }

    if (this.inputHandler.keys.space.pressed) {
      this.player.shoot();
    }
  }

  update() {
    this.player.update();
    this.handleInputActions();
    this.projectilesPool.forEach((projectile) => {
      projectile.update();
    });

    this.waves.forEach((wave) => {
      wave.update();
    });

    if (this.isCreateNewWave()) {
      this.createNewWave();
    }
  }

  draw(ctx) {
    this.player.draw(ctx);
    this.projectilesPool.forEach((projectile) => projectile.draw(ctx));
    this.waves.forEach((wave) => wave.draw(ctx));
    this.ui.draw(ctx);
  }
}
