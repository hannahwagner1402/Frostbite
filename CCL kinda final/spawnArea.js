import GameObjects from "./GameObjects.js";
class spawnArea extends GameObjects {
  constructor(context, x, y, width, height, CONFIG) {
    super(context, x, y, width, height, CONFIG);
    this.init();
  }

  init() {}

  update() {}

  render() {
   // this.context.strokeStyle = "red";
   // this.context.fillStyle = "red";
   // this.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  getBoundingBox() {
    return {
      x: this.x,
      y: this.y,
      w: this.width,
      h: this.height,
    };
  }
}

export default spawnArea;
