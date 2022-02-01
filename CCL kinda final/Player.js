import GameObjects from "./GameObjects.js";
import Sprites from "./sprites.js";
import { HERO } from "./globals.js";

class Player extends GameObjects {
  constructor(context, x, y, width, height, CONFIG) {
    //"importing from gameObjects"
    super(context, x, y, width, height, CONFIG);
    //defining variables
    this.dx = 0;
    this.dy = 0;
    this.currentKeys = {};
    this.velocity = 0.2;
    this.lastDirection = 1;
    this.spriteIndex = 0;
    this.friction = 0.7;
    this.state = "idle";
    this.slowDown = 0.8;
    this.lives = 3;
    this.collidingObject = null;
    this.spriteImageArray = [];
    this.sprites = new Sprites(context, x, y, width, height, CONFIG);

    this.init();
  }

  init() {
    // makes keydown usable
    document.addEventListener("keydown", (event) => {
      // prevents scrolling
      event.preventDefault();
      this.currentKeys[event.code] = true;
    });

    // makes keyup usable
    document.addEventListener("keyup", (event) => {
      this.currentKeys[event.code] = false;
    });
  }

  update(timePassedSinceLastRender) {
    // sets value of dx 
    //right
    if (this.currentKeys["ArrowRight"] === true) this.dx = 1;
    //left
    else if (this.currentKeys["ArrowLeft"] === true) this.dx = -1;
    else this.dx = 0;
    //up
    if (this.currentKeys["ArrowUp"] === true) this.dy = -1;
    //down
    else if (this.currentKeys["ArrowDown"] === true) this.dy = 1;
    //idle
    else this.dy = 0;
    // store last direction the player moved in (used for borders as well)
    if (this.dx !== 0) this.lastDirection = this.dx;

    // velocity decreasing
    // calculate new position
    this.x +=
      timePassedSinceLastRender *
      this.dx *
      this.velocity *
      (1 - HERO.form / 10) 
    this.y +=
      timePassedSinceLastRender *
      this.dy *
      this.velocity *
      (1 - HERO.form / 10);

    // check for right boundary
    if (this.x + this.width / 2 > this.CONFIG.width)
      this.x = this.CONFIG.width - this.width / 2;
    // check for left boundary
    else if (this.x - this.width / 2 < 0) this.x = 0 + this.width / 2;

    // check for bottom boundary
    if (this.y + this.height / 2 > this.CONFIG.height)
      this.y = this.CONFIG.height - this.height / 2;
    // check for top boundary
    else if (this.y - this.height / 2 < 0) this.y = 0 + this.height / 2;

    // define current state
    //?-> if :-> else
    this.state = this.dx === 0 && this.dy === 0 ? "idle" : "run";
    
    //slow down the speed with each 
    if ((this.Drop = this.player) == true) {
    this.slowDown;
    }

  }

  render() {
    super.render();

    this.context.translate(this.x, this.y);

    this.context.scale(this.lastDirection, 1);

    // draw image
    let coords = this.getImageSpriteCoordinates(
    this.sprites.sprites[this.state][this.spriteIndex]
    );

    // draw image
    this.context.drawImage(
      this.sprites.sprites[this.state][this.spriteIndex].image, // the image
      coords.sourceX, // source x
      coords.sourceY, // source y
      coords.sourceWidth, // source width
      coords.sourceHeight, // source height
      -this.width / 2, // destination x
      -this.height / 2, // destination y
      this.width, // destination width
      this.height // destination height
    );
    this.context.resetTransform();
    // box for lives 
    this.context.fillStyle = "white";
    this.context.fillRect(645, 0, 200, 55);
    this.context.font = "25px verdana";
    this.context.fillStyle = "black";
    this.context.fillText("Lives:" + this.lives, 693, 40);
  }

  getImageSpriteCoordinates(sprite) {
    let frameX = Math.floor(
      ((performance.now() / 1000) * sprite.fps) % sprite.frames
    );

    let coords = {
      sourceX: frameX * sprite.frameSize.width,
      sourceY: 0,
      sourceWidth: sprite.frameSize.width,
      sourceHeight: sprite.frameSize.height,
    };
    return coords;
  }
  BoundingBox() {
    let bb = super.getBoundingBox();
    return bb;
  }
}

export default Player;
export { HERO };
