class Sprites {
  constructor(context, x, y, width, height, CONFIG) {
    this.context = context;
    this.dx = 0;
    this.dy = 0;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.CONFIG = CONFIG;
    this.state = "idle";
    this.form = 0;
    this.spriteIndex = 0;
    this.spriteImageArray = [];

    this.debug = true;

    this.init();
  }

  init() {
    this.sprites = {
      run: {
        0: {
          src: "./assets/snowman1 run.png",
          frames: 7,
          fps: 10,
          frameSize: {
            width: 105,
            height: 105,
          },
          image: null,
        },
        1: {
          src: "./assets/snowman2 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        2: {
          src: "./assets/snowman3 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        3: {
          src: "./assets/snowman4 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        4: {
          src: "./assets/snowman5 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        5: {
          src: "./assets/snowman6 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        6: {
          src: "./assets/snowman7 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        7: {
          src: "./assets/snowman8 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        8: {
          src: "./assets/snowman9 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        8: {
          src: "./assets/snowman9 run.png",
          frames: 5,
          fps: 6,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
      },

      idle: {
        0: {
          src: "./assets/snowman1 idle.png",
          frames: 8,
          fps: 10,
          frameSize: {
            width: 105,
            height: 105,
          },
          image: null,
        },

        1: {
          src: "./assets/snowman2 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },

        2: {
          src: "./assets/snowman3 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },

        3: {
          src: "./assets/snowman4 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        4: {
          src: "./assets/snowman5 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 150,
            height: 150,
          },
          image: null,
        },
        5: {
          src: "./assets/snowman6 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        6: {
          src: "./assets/snowman7 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        7: {
          src: "./assets/snowman8 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        8: {
          src: "./assets/snowman9 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
        9: {
          src: "./assets/snowman9 idle.png",
          frames: 2,
          fps: 3,
          frameSize: {
            width: 160,
            height: 160,
          },
          image: null,
        },
      },
    };

    Object.values(this.sprites).forEach((sprite) => {
      Object.values(sprite).forEach((spritesheet) => {
        //console.log(spritesheet);

        spritesheet.image = new Image();
        spritesheet.image.src = spritesheet.src;
        this.spriteImageArray.push(spritesheet.image);
      });
    });
  }

  update() {}

  render() {}

  getImageSpriteCoordinates(sprite) {}
}

export default Sprites;
