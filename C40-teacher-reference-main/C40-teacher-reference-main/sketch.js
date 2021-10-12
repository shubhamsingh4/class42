var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img, f1_img
var yVel = 0


function preload() {
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f1_img = loadImage("images/f1.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  obstacleGroup = createGroup();
  for (var i = 0; i < 5; i++) {
    x = random(200, 950);
    y = random(-height * 4, height - 300);
    f1 = createSprite(x, y);
    f1.addImage("obsticles", f1Img);
    obstacleGroup.add(f1);
  }
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
