import GameObjects from "./GameObjects.js";
class Enemy extends GameObjects {
  constructor(context, x, y, width, height, CONFIG) {
    super(context, x, y, width, height, CONFIG);
    this.init();
    this.state='run';
  }
  init() {
    //sprites for enemy
    this.sprites = { 
    run: { 
      src: "./assets/enemy.png",
      frames: 4,
      fps: 5,
      frameSize: {
        width: 125,
        height: 125,
      },
      image: null,
    }};
    Object.values(this.sprites).forEach((sprite) => {
      sprite.image = new Image();
      sprite.image.src = sprite.src;
    });
  }
  update(){ 
    
  }
  
  render() {
    super.render();
    this.context.translate(this.x, this.y);
    let coords = this.getImageSpriteCoordinates(this.sprites[this.state]);

    // draw image for sprites
    this.context.drawImage(
      this.sprites[this.state].image, // the image
      coords.sourceX,     // source x
      coords.sourceY,     // source y
      coords.sourceWidth, // source width
      coords.sourceHeight,// source height
      -this.width / 2,      // destination x
      -this.height / 2,     // destination y
      this.width,         // destination width
      this.height         // destination height
    );
    this.context.resetTransform();
  }
  //function that seperates sprite images
  getImageSpriteCoordinates(sprite) {

    let frameX = Math.floor(performance.now() / 1000 * sprite.fps % sprite.frames);

    let coords = {
      sourceX: frameX * sprite.frameSize.width,
      sourceY: 0,
      sourceWidth: sprite.frameSize.width,
      sourceHeight: sprite.frameSize.height
    }
    return coords;  
  }
  //bounding box enemy
  BoundingBox() {
    let bb = super.getBoundingBox();
    return bb;
  }
}
export default Enemy;
