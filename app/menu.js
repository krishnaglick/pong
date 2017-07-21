
const _ = require('lodash');

class Menu {
  constructor(game) {
    this.game = game;
    this.x = game.width / 6;
    this.y = game.height / 2;

    this.style = { font: "bold 18px Arial", fill: "#fff" };

    this.setupMenuItems = this.setupMenuItems.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  setupMenuItems(visible = false) {
    const items = [
      [() => this.game.isPaused(false), this.game.height / 2, this.game.width / 2, `Resume`, this.style],
      [() => this.game.score.reset(5000) || this.game.isPaused(false), this.game.height / 2, this.game.width / 2, `Restart`, this.style],
      [() => {}, this.game.height / 2, this.game.width / 2, `Quit`, this.style]
    ];
    this.menuItems = _.map(items, (item, i) => {
      item[2] = 20 + (i * 20);
      const [event, ...textProps] = item;
      const text =  this.game.add.text(...textProps);
      text.inputEnabled = true;
      text.events.onInputDown.add(event, this);
      text.addColor('#fff', 0);
      text.visible = visible;
      return text;
    });
  }

  show() {
    this.setupMenuItems(true);
  }

  hide() {
    _.forEach(this.menuItems, (item) => {
      item.destroy();
    });
  }
}

module.exports = Menu;
