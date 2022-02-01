class GameObjects {
  constructor(context, x, y, width, height, CONFIG) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.CONFIG = CONFIG;

    this.debug = true;

    //this.init();
  }

  init() {}

  update() {}

  render() {
    let bb = this.getBoundingBox();

    if (this.debug) {
      this.context.translate(bb.x, bb.y);
      //this.context.strokeRect(0, 0, bb.w, bb.h);
      this.context.resetTransform();
    }
  }
  getBoundingBox() {
    return {
      x: this.x - this.width / 4,
      y: this.y - this.height / 4,
      w: 50,
      h: 50,
    };
  }
  
}

export default GameObjects;
