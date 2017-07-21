
exports.escape = (e, game) => {
  if(e.keyCode !== 27)
    return;

  game.isPaused(!game.isPaused());
};

exports.upArrow = (e, game) => {
  if(e.keyCode !== 38)
    return;
  game.player.move('up');
};

exports.downArrow = (e, game) => {
  if(e.keyCode !== 40)
    return;
  game.player.move('down');
};

exports.w = (e, game) => {
  if(e.key !== 'w')
    return;
  game.player.move('up');
};

exports.s = (e, game) => {
  if(e.key !== 's')
    return;
  game.player.move('down');
};
