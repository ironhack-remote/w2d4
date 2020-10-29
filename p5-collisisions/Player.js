class Player {
  constructor(leftSide, topSide) {
    this.height = 30;
    this.width = 10;
    this.leftSide = leftSide;
    this.topSide = topSide;
  }

  collisionCheck(player) {
    const rightSide = this.leftSide + this.width;
    const isTouchingOnLeft = rightSide >= player.leftSide;

    const isTouchingOnRight = this.leftSide <= player.leftSide + player.width;

    if (isTouchingOnLeft && isTouchingOnRight) {
      console.log("ROUCHING");
    }
  }

  moveLeft(steps) {
    if (this.leftSide <= 0) {
      return;
    }
    this.leftSide -= steps;
  }

  moveRight(steps) {
    if (this.leftSide >= WIDTH - this.width) {
      return;
    }
    this.leftSide += steps;
  }

  moveUp(steps) {
    if (thistopSide <= 0) {
      return;
    }
    thistopSide -= steps;
  }

  moveDown(steps) {
    if (this.topSide >= WIDTH - this.height) {
      return;
    }
    thistopSide += steps;
  }

  draw() {
    rect(this.leftSide, this.topSide, this.width, this.height);
  }
}
