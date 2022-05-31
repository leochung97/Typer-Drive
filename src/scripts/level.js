export default class Level {
  constructor(level) {
    this.level = level;
    this.enemyhealth = document.querySelector(".enemy-bar");
    this.enemyhealth.max = this.level * 10 + 100;
    this.enemyhealth.value = this.level * 10 + 100;
  }
}