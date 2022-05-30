import Sprite from "./sprite.js"

export default class Level {
  constructor(level) {
    this.level = level;
    this.enemy = new Sprite();
  }
}