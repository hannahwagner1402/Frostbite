import Enemy from "./enemy.js";
import Border from "./Border.js";
import Player from "./player.js";
import spawnArea from "./spawnArea.js";
import Drop from "./Drop.js";
import { RandomDispatcher, randomNumberBetween } from "./dispatch.js";
import { HERO } from "./globals.js";

// global variables
let context;
let lastTickTimestamp;
let player;
let gameObjects = [];
let Drops = [];
let enemys = [];
let borders = [];
let spawn = [];
let dropImageIndex = 0;
let form = 0;
let itemCounter = 0;
let soundEffect = new Audio("./assets/pickupSound.wav");
soundEffect.volume = 0.3;
let sunCollisionAudio = new Audio("./assets/sunCollision.wav");
sunCollisionAudio.volume = 0.3;
/*let bckgrndMsc = new Audio('./assets/backgroundMusic.mp3');
/*let winAudio= new Audio('./assets/win.wav');
winAudio.volume=0.3*/

const CONFIG = {
  width: 832,
  height: 600,
};

const init = () => {
  let canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  canvas.setAttribute("width", CONFIG.width);
  canvas.setAttribute("height", CONFIG.height);

  // create Player
  player = new Player(context, 160, 240, 100, 100, CONFIG);
  gameObjects.push(player);
  //tree top
  borders[0] = new Border(context, 0, 0, 190, 170, CONFIG);
  //tree bottom
  borders[1] = new Border(context, 0, 170, 110, 150, CONFIG);
  //bushes top
  borders[2] = new Border(context, 0, 0, 900, 60, CONFIG);
  //bushes bottom
  borders[3] = new Border(context, 0, 545, 900, 60, CONFIG);
  borders[4] = new Border(context, 0, 500, 210, 45, CONFIG);
  //bushes top
  borders[5] = new Border(context, 0, 455, 155, 45, CONFIG);
  borders[6] = new Border(context, 0, 410, 105, 45, CONFIG);
  borders[7] = new Border(context, 0, 320, 50, 90, CONFIG);
  borders[8] = new Border(context, 0, 320, 50, 45, CONFIG);
  borders[9] = new Border(context, 670, 100, 50, 40, CONFIG);
  borders[10] = new Border(context, 725, 60, 105, 170, CONFIG);
  borders[11] = new Border(context, 620, 60, 100, 40, CONFIG);
  borders[12] = new Border(context, 50, 365, 55, 45, CONFIG);

  spawn[0] = new spawnArea(context, 200, 70, 520, 480, CONFIG);
  //spawn[1] = new spawnArea(context, 200, 200, 70, 400, CONFIG);

  dropAtRandomTime();
  /*bckgrndMsc.loop = true;
  bckgrndMsc.volume = 0.2;
  bckgrndMsc.play();*/

  lastTickTimestamp = performance.now();
  gameLoop();
};

const gameLoop = () => {
  // how much time has passed since the last tick?
  let timePassedSinceLastRender = performance.now() - lastTickTimestamp;

  update(timePassedSinceLastRender);
  render();

  // set lastTickTimestamp to "now"
  lastTickTimestamp = performance.now();
  // call next iteration of the game loop
  requestAnimationFrame(gameLoop);
};

const update = (timePassedSinceLastRender) => {
  const oldPositions = {
    x: player.x,
    y: player.y,
  };
  const Positions = {
    x: player.x,
    y: player.y,
  };
  gameObjects.forEach((game) => {
    game.update(timePassedSinceLastRender);
  });

  //pick up
  let dropsToRemove = [];
  Drops.forEach(function (Drop) {
    if (checkCollision(Drop, player)) {
      dropsToRemove.push(Drop);
      player.spriteIndex += 1;
    }
  });
  Drops.forEach(function (Drop) {
    if (checkCollision(Drop, player)) {
      HERO.form += 1;
      itemCounter++;
      soundEffect.play();
      if (itemCounter === 9) {
        winGame();
      }
      console.log(itemCounter);
    }
  });

  borders.forEach(function (Border) {
    if (checkCollision(Border, player)) {
      player.x = oldPositions.x;
      player.y = oldPositions.y;
    }
  });

  enemys.forEach(function (Enemy, position) {
    if (checkCollision(Enemy, player) === true) {
      sunCollisionAudio.play();
      player.lives--;
      enemys.splice(position, 1);
      gameObjects.splice(gameObjects.indexOf(Enemy), 1);
      if (player.lives <= 0) {
        lostGame();
      }
    }
    Enemy.x += randomNumberBetween(0.5, 1);
    Enemy.y += randomNumberBetween(-0.5, 1);
  });

  //deletes the drops when picked up
  dropsToRemove.forEach(function (Drop) {
    dropImageIndex++;
    Drops.splice(Drops.indexOf(Drop), 1);
    gameObjects.splice(gameObjects.indexOf(Drop), 1);
    dropAtRandomTime();
  });
};

const render = () => {
  // clear the canvas
  context.resetTransform();
  context.clearRect(0, 0, CONFIG.width, CONFIG.height);
  gameObjects.forEach((Game) => {
    Game.render();
  });
  borders.forEach((borders) => {
    borders.render();
  });
  spawn[0].render();
  /*spawn[1].render();
  spawn[1].render();*/
};

let checkCollision = (object1, object2) => {
  let p1 = object1.getBoundingBox();
  let p2 = object2.getBoundingBox();
  if (
    p1.x < p2.x + p2.w &&
    p1.x + p1.w > p2.x &&
    p1.y < p2.y + p2.h &&
    p1.y + p1.h > p2.y
  ) {
    //console.log(true);
    return true;
  } else return false;
};

const dropAtRandomTime = function () {
  let randomDispatcher = new RandomDispatcher(() => {
    let dropX = randomNumberBetween(200, 520);
    let dropY = randomNumberBetween(70, 480);
    let newDrop = new Drop(
      context,
      dropX,
      dropY,
      110,
      110,
      dropImageIndex,
      CONFIG
    );
    Drops.push(newDrop);
    gameObjects.push(newDrop);

    let amountOfEnemies = randomNumberBetween(0, 2);

    for (let i = 0; i <= amountOfEnemies; i++) {
      let EnemyX = randomNumberBetween(-100, -50);
      let EnemyY = randomNumberBetween(100, 300);
      let newEnemy = new Enemy(context, EnemyX, EnemyY, 80, 80, CONFIG);

      enemys.push(newEnemy);
      gameObjects.push(newEnemy);
    }
  });
};

function lostGame() {
  window.location.href = "lose.html";
}

function winGame() {
  window.location.href = "win.html";
}

window.addEventListener("load", () => {
  init();
});
