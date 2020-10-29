class Game {
  constructor() {
    this.player1 = new Player(100, 100);
    this.player2 = new Player(300, 80);
  }

  draw() {
    this.player1.draw();
    this.player2.draw();

    if (keyIsDown(37)) {
      this.player1.moveLeft(5);
    }
    if (keyIsDown(38)) {
      this.player1.moveUp(5);
    }
    if (keyIsDown(39)) {
      this.player1.moveRight(5);
    }
    if (keyIsDown(40)) {
      this.player1.moveDown(5);
    }

    if (keyIsDown(87)) {
      this.player2.moveUp(7);
    }
    if (keyIsDown(65)) {
      this.player2.moveLeft(5);
    }

    if (keyIsDown(83)) {
      this.player2.moveDown(7);
    }
    if (keyIsDown(68)) {
      this.player2.moveRight(5);
    }
    if (this.player1.collisionCheck(this.player2)) {
      // this.player2.randomizePosition();
      noLoop();
      const button = document.querySelector("button");
      button.style.display = "block";
      button.onclick = () => {
        loop();
      };
    }
  }
}
