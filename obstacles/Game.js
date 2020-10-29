class Game {
  constructor() {
    this.allObstacles = [];
    this.player = new Player();
  }

  collisionCheck(player, obstacle) {
    const rightSide = player.x + player.width;
    const obstacleRightSide = obstacle.x + obstacle.width;
    const bottomSide = player.y + player.height;
    const obstacleBottomSide = obstacle.y + obstacle.height;

    const isTouchingOnLeft = rightSide >= obstacle.x;

    const isTouchingOnRight = player.x <= obstacleRightSide;

    const isTouchingOnTop = bottomSide >= obstacle.y;

    const isTouchingOnBottom = player.y <= obstacleBottomSide;

    if (
      isTouchingOnLeft &&
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom
    ) {
      console.log("CONTACT");
      noLoop();
      return true;
      // noLoop();
    }
    return false;
  }

  draw() {
    this.player.draw();

    if (keyIsDown(37)) {
      this.player.moveLeft(5);
    }
    if (keyIsDown(39)) {
      this.player.moveRight(5);
    }

    if (frameCount % (60 * 1) === 0) {
      this.allObstacles.push(new Obstacle());
    }

    if (frameCount % 10 === 0) {
      this.allObstacles.forEach((obstacle) => {
        obstacle.moveDown();
      });
    }
    this.allObstacles.forEach((obstacle) => {
      this.collisionCheck(this.player, obstacle);
    });

    this.allObstacles.forEach((obstacle) => obstacle.draw());
  }
}
