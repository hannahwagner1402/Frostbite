import GameObjects from "./GameObjects.js";
class Border extends GameObjects {
  constructor(context, x, y, width, height, CONFIG) {
    super(context, x, y, width, height, CONFIG);
    this.init();
  }

  init() {}

  update() {}

  render() {
    // made the borders red to vizualize them better when mapping them out
    //this.context.strokeStyle = "red";
    //this.context.fillStyle = "none";
    //this.context.strokeRect(this.x, this.y, this.width, this.height);
  }
  //defining the size of the bounding boxes
  getBoundingBox() {
    return {
      x: this.x,
      y: this.y,
      w: this.width,
      h: this.height,
    };
  }
}

export default Border;
