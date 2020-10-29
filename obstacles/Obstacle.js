class Obstacle {
  constructor() {
    this.x = 50;
    this.y = -100;
    this.width = 100;
    this.height = 30;
  }

  moveDown() {
    console.log("MOVING DOWN");
    this.y += 50;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
