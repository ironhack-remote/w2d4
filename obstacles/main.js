const game = new Game();

function preload() {}

function setup() {
  createCanvas(WIDTH, WIDTH);
}

function draw() {
  clear();
  background("cyan");
  game.draw();
}
