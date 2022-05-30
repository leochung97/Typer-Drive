import Sprite from "./sprite.js"

export default class Level {
  constructor(level) {
    this.level = level;
    this.player = new Sprite({x: 95, y: 100});
    this.enemy = new Sprite({x: 785, y: 100});
    this.player.draw();
    this.enemy.draw();
  }
}