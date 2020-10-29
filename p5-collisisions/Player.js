class Player {
  constructor(leftSide, topSide) {
    this.height = 30;
    this.width = 10;
    this.leftSide = leftSide;
    this.topSide = topSide;
  }

  collisionCheck(otherPlayer) {
    const rightSide = this.leftSide + this.width;
    const otherPlayerRightSide = otherPlayer.leftSide + otherPlayer.width;
    const bottomSide = this.topSide + this.height;
    const otherPlayerBottomSide = otherPlayer.topSide + otherPlayer.height;

    const isTouchingOnLeft = rightSide >= otherPlayer.leftSide;

    const isTouchingOnRight = this.leftSide <= otherPlayerRightSide;

    const isTouchingOnTop = bottomSide >= otherPlayer.topSide;

    const isTouchingOnBottom = this.topSide <= otherPlayerBottomSide;

    if (
      isTouchingOnLeft &&
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom
    ) {
      return true;
      // noLoop();
    }
    return false;
  }
  randomizePosition() {
    const randomX = Math.floor(Math.random() * WIDTH - this.width);
    const randomY = Math.floor(Math.random() * WIDTH - this.height);
    this.leftSide = randomX;
    this.topSide = randomY;
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
    if (this.topSide <= 0) {
      return;
    }
    this.topSide -= steps;
  }

  moveDown(steps) {
    if (this.topSide >= WIDTH - this.height) {
      return;
    }
    this.topSide += steps;
  }

  draw() {
    rect(this.leftSide, this.topSide, this.width, this.height);
  }
}
