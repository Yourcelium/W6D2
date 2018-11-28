class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    console.log('hi');
  }

  setupTowers() {
    console.log('start of setup');
    let $first_tower = $('<ul>');
    $first_tower.attr('id', "0-tower");

    console.log($first_tower);
    let $second_tower = $("<ul class='towers'>");
    $second_tower.attr('id', "1-tower");

    let $third_tower = $("<ul class='towers'>");
    $third_tower.attr('id', "2-tower");

    // for (var i = 0; i < 3; i++) {
    //   let $ring = $("<li>");
    //   $ring.addClass('ring');
    //   $ring.attr('id', `${i}-ring`);
    //   $first_tower.append($ring);
    // }
    // this.$el.attr('id', 'ihere');
    this.$el.append($first_tower);
    this.$el.append($second_tower);
    this.$el.append($third_tower);
    console.log(this.$el);
    console.log('end of setup');
  }

  render() {
    this.game.towers.forEach((tower, idx) => {
      if (tower.length) {
        tower.forEach((ring) => {
          $gametower = $(`#${idx}-tower`);
        });
      }
    });
  }
}
module.exports = View;
