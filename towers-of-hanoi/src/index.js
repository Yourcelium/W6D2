HanoiGame = require('./game.js');

HanoiView = require('./hanoi-view.js');

console.log('nevermind');


$( () => {
  let rootEl = $('.hanoi');
  let game = new HanoiGame();
  let view = new HanoiView(game, rootEl);
});
