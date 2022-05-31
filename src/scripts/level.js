import Sprite from "./sprite.js"

export default class Level {
  constructor(level) {
    this.level = level;
    this.player = new Sprite({x: 95, y: 110});
    this.enemy = new Sprite({x: 785, y: 110});
    this.player.draw();
    this.enemy.draw();
    this.enemyhealth = document.querySelector(".enemy-bar");
    this.enemyhealth.max = this.level * 10 + 100;
    this.enemyhealth.value = this.level * 10 + 100;
  }
}