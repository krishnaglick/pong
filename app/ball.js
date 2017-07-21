
class Ball {
  constructor(game) {
    this.game = game;

    this.reset = this.reset.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
  }

  spawn(x, y, model) {
    this.sprite = this.game.add.sprite(x, y, model);

    this.default = { x, y };

    return this.sprite;
  }

  enablePhysics() {
    this.sprite.body.bounce.set(1);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.velocity.setTo(200,200);
  }

  pointTest() {
    if(this.sprite.body.blocked.left)
      game.score.addScore('ai');
    if(this.sprite.body.blocked.right)
      game.score.addScore('player');
  }

  reset(timeout = 1000) {
    if(this.game.isPaused())
      return setTimeout(() => this.reset(timeout), 100);

    this.sprite.x = this.default.x;
    this.sprite.y = this.default.y;
    this.sprite.body.velocity.setTo(0,0);
    setTimeout(() => this.sprite.body.velocity.setTo(200,200), timeout);
  }

  pause() {
    this.currentVelocity = {
      x: this.sprite.body.velocity.x,
      y: this.sprite.body.velocity.y
    }
    this.sprite.body.velocity.setTo(0,0);
  }

  unpause() {
    this.sprite.body.velocity.setTo(this.currentVelocity.x, this.currentVelocity.y);
  }
}

module.exports = Ball;
