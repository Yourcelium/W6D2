const Game = require('./game.js');

class View {
  constructor(game, $container) {
    this.game = new Game();
    this.$container = $container;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {

    this.$container.on("click", ".cell", (event) => {
      console.log('click');
      let $cell = $(event.target);
      this.makeMove($cell);
      console.log($cell.data('pos').split(' '));
      let pos = $cell.data('pos').split(" ").map(parseInt);
      console.log(pos);
      this.game.playMove(pos);
      if (this.game.isOver()) {
        alert(`WE GOT A WINNER`);
      }

    });
  }

  makeMove($square) {
    if ($square.hasClass('unchecked')) {
      $square.removeClass();
      $square.addClass('cell');
      if (this.game.currentPlayer === 'x'){
        $square.addClass('checked');
        $square.data('player', 'X');
        $square.addClass('xxx');
        $square.html('<img class="token" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F10%2FPNGPIX-COM-Frog-PNG-Transparent-Image.png&f=1" alt="">');

      } else {
        $square.addClass('checked');
        $square.addClass('ooo');
        $square.data('player', '0');
        $square.html('<img class="token" src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F535222646963572736%2FKZItD1f-_400x400.png&f=1" alt="">');
      }
    }
  }

  setupBoard() {
    console.log("hi");

    const positions = {
      0 : "0 0",
      1 : "1 0",
      2 : "2 0",
      3 : "0 1",
      4 : "1 1",
      5 : "2 1",
      6 : "0 2",
      7 : "1 2",
      8 : "2 2",
    };
    let $grid = $('<ul>');
    for (var i = 0; i < 9; i++) {
      let $square = $('<li>');
      $square.addClass('unchecked cell');
      $square.data('pos', positions[i]);
      $grid.append($square);

    }
    $grid.addClass('grid');
    this.$container.append($grid);
  }
}

module.exports = View;
