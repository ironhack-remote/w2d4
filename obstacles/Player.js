class Player {
  constructor() {
    this.x = 200;
    this.y = 350;
    this.height = 50;
    this.width = 50;
  }

  moveLeft(steps) {
    if (this.x <= 0) {
      return;
    }
    this.x -= steps;
  }

  moveRight(steps) {
    if (this.x >= WIDTH - this.width) {
      return;
    }
    this.x += steps;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
