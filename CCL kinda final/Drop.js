import GameObjects from "./GameObjects.js";
class Drop extends GameObjects {
  constructor(context, x, y, width, height, dropImageIndex, CONFIG) {
    super(context, x, y, width, height, CONFIG);
    this.dropImageIndex = dropImageIndex;
    //velocity of falling item
    this.velocityY = 5;
    //item should end in the originally planned randomized spot
    this.endY = y;
    //gravity of falling items
    this.gravity = 1;

    this.init();
  }
  init() {
    //array of drops
    let droppedItemsLinks = [
      "./assets/body&carrot.png",
      "./assets/buttons.png",
      "./assets/stick1.png",
      "./assets/stick2.png",
      "./assets/hat.png",
      "./assets/scarf.png",
      "./assets/mitten1.png",
      "./assets/mitten2.png",
      "./assets/wreath.png",
      "./assets/easteregg.png",
    ];

    console.log(droppedItemsLinks[0]);
    //declaring images & source
    this.image = new Image();
    this.image.src = droppedItemsLinks[this.dropImageIndex];
   
    //ensuring the objects drop from above canvas
    this.y = -50;
  }
  update(timedelta) {

    //calculating the speed of the fall of the drop
    this.velocityY -= (timedelta * this.gravity) / 50;
    if (this.velocityY <= 0) this.y -= (this.velocityY * timedelta) / 50;
    
    //stops the velocity once the drop lands
    if (this.y >= this.endY) {
      this.velocityY = 0;
      this.y = this.endY;
    }
  }
  //rendering the drops
  render() {
    super.render();
    this.context.translate(this.x, this.y);
    this.context.drawImage(
      this.image,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );

    this.context.resetTransform();

  }
  //bounding boxes for drops
  BoundingBox() {
    let bb = super.getBoundingBox();
    return bb;
  }
}
export default Drop;
