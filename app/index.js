
require('pixi');
require('p2');

const phaser = require('phaser');
const _ = require('lodash');

const menu = require('./menu');
const keyboardEvents = require('./keyboard-events');
const Player = require('./player');
const ai = require('./ai');
const ball = require('./ball');
const score = require('./score');

const game = new phaser.Game(400, 400, phaser.AUTO, '', { preload, create, update });

let isPaused = false;
game.isPaused = (pauseMode) => {
  if(typeof pauseMode === 'boolean') {
    isPaused = pauseMode;
    if(isPaused) {
      game.player.pause();
      game.ai.pause();
      game.ball.pause();
      game.menu.show();
    }
    else {
      game.player.unpause();
      game.ai.unpause();
      game.ball.unpause();
      game.menu.hide();
    }
  }

  return isPaused;
};

function preload() {
  game.load.image('bar', 'app/assets/bar.png');
  game.load.image('ball', 'app/assets/ball.png');
}

function create(game) {
  game.menu = new menu(game);
  game.player = new Player(game);
  game.ai = new ai(game);
  game.ball = new ball(game);
  game.score = new score(game);

  window.addEventListener('keypress', (e) => {
    _.forEach(Object.keys(keyboardEvents), (key) => {
      keyboardEvents[key](e, game);
    });
  });

  this.game.physics.arcade.enable([
    game.player.spawn(50, 100, 'bar'),
    game.ai.spawn(350, 100, 'bar'),
    game.ball.spawn(200, 100, 'ball')
  ]);

  [game.player, game.ai, game.ball].forEach(s => s.enablePhysics());

  game.physics.startSystem(Phaser.Physics.ARCADE);
}

function update(game) {
  game.ai.run();
  game.physics.arcade.collide(game.player.sprite, game.ball.sprite);
  game.physics.arcade.collide(game.ai.sprite, game.ball.sprite);
  game.ball.pointTest();
}

window.game = game;
