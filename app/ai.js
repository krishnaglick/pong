
const Player = require('./player');

class AI extends Player {
  constructor(...args) {
    super(...args);

    this.run = this.run.bind(this);
  }

  run() {
    if(this.sprite.y > this.game.ball.sprite.y)
      this.move('up', 2);
    else
      this.move('down', 2);
  }
}

module.exports = AI;
