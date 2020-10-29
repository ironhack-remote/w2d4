class Player {
  constructor(x, y) {
    this.height = 30;
    this.width = 10;
    this.x = x;
    this.y = y;
  }

  collisionCheck(player) {
    const isTouchingOnLeft = this.x + this.width >= player.x;

    const isTouchingOnRight = this.x <= player.x + player.width;

    if (isTouchingOnLeft && isTouchingOnRight) {
      console.log("ROUCHING");
    }
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

  moveUp(steps) {
    if (this.y <= 0) {
      return;
    }
    this.y -= steps;
  }

  moveDown(steps) {
    if (this.y >= WIDTH - this.height) {
      return;
    }
    this.y += steps;
  }

  draw() {
    rect(this.x, this.y, this.width, this.height);
  }
}
