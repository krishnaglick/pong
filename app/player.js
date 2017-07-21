
const MOVE_AMOUNT = 4;

class Player {
  constructor(game) {
    this.game = game;

    this.spawn = this.spawn.bind(this);
    this.move = this.move.bind(this);
    this.enablePhysics = this.enablePhysics.bind(this);
  }

  spawn(x, y, model) {
    this.sprite = this.game.add.sprite(x, y, model);
    this.sprite.inputEnabled = true;
    this.sprite.scale.y = 4;
    return this.sprite;
  }

  enablePhysics() {
    this.sprite.body.immovable = true;
    this.sprite.body.allowGravity = false;
  }

  move(direction, amount = MOVE_AMOUNT) {
    if(this.isPaused)
      return;
    if(direction === 'up') {
      if(this.sprite.y - amount <= 0)
        this.sprite.y = 0;
      else
        this.sprite.y -= amount;
    }
    else {
      if(this.sprite.y + amount >= game.height - this.sprite.height)
        this.sprite.y = game.height - this.sprite.height;
      else
        this.sprite.y += amount;
    }
  }

  pause() {
    this.isPaused = true;
  }

  unpause() {
    this.isPaused = false;
  }
}

module.exports = Player;
