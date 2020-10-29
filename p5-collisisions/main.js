const game = new Game();

function preload() {
  console.log("PRELOAD");
}

function setup() {
  console.log("SETUP");
  createCanvas(WIDTH, WIDTH);
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}
