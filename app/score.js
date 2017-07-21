
class Score {
  constructor(game) {
    this.game = game;
    this.score = {
      player: 0,
      ai: 0
    };

    this.playerScoreSprite = this.game.add.text((game.width / 2) - 20, game.height - 40, 0, {});
    this.aiScoreSprite = this.game.add.text((game.width / 2) + 20, game.height - 40, 0, {});

    this.playerScoreSprite.addColor('#fff', 0);
    this.aiScoreSprite.addColor('#fff', 0);
  }

  addScore(target) {
    this.score[target] += 1;
    this.playerScoreSprite.setText(this.score.player);
    this.aiScoreSprite.setText(this.score.ai);
    game.ball.reset();
  }

  reset(timeout = 1000) {
    this.score = {
      player: 0,
      ai: 0
    };
    this.playerScoreSprite.setText(this.score.player);
    this.aiScoreSprite.setText(this.score.ai);
    game.ball.reset(timeout);
  }
}

module.exports = Score;
