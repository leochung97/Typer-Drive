import Dictionary from "./dictionary.js";
import Input from "./input.js";
import Level from "./level.js";
import Sprite from "./sprite.js";
import { playerSprite, enemySprites } from "./characters.js";

let currentlvl = 1;
let wordsEntered = 0;
let enemiesDefeated = 0;
let intervals = [];

let player = playerSprite;
let enemy = enemySprites[Math.floor(Math.random() * enemySprites.length)];

export default class Game {  
  constructor() {
    this.input = document.querySelector("#input");
    this.word = document.querySelector("#word");
    this.start = document.querySelector("#start-button");
    this.playerbar = document.querySelector(".player-health-bar");
    this.enemybar = document.querySelector(".enemy-health-bar");
    this.playerhealth = document.querySelector(".player-bar");
    this.enemyhealth = document.querySelector(".enemy-bar");
    this.losspop = document.querySelector("#losspopup");
    this.wordsEntered = document.querySelector("#wordcount");
    this.enemiesDefeated = document.querySelector("#enemycount");
  }

  newword() {
    let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
    this.word.innerText = newword;
  }

  addEventListeners() {
    this.start.addEventListener("click", (event) => {
      this.start.innerText = "Restart"
      intervals.forEach(clearInterval);
      this.setup();
      this.losspop.classList.remove("active");
    });

    this.input.addEventListener("keyup", this.inputhandler)
  }

  setup() {
    // Game Setup
    this.playerhealth.value = 100;
    currentlvl = 1;
    wordsEntered = 0;
    enemiesDefeated = 0;
    new Level(1);
    clearInterval(timedplayerdamage);
    let timedplayerdamage = setInterval(this.playerdamage.bind(this), 2500);
    intervals.push(timedplayerdamage);

    // Word Setup
    this.newword();
    this.input.placeholder = "Type Here!";
    this.input.value = "";
    this.input.focus();

    // Display Setup
    this.playerbar.style.display = "block";
    this.enemybar.style.display = "block";
    player.switchAnim('idle');
    enemy.switchAnim('idle');
  }

  playerdamage() {
    let enemydamage = (currentlvl * 0.5);
    this.playerhealth.value -= enemydamage;
    setTimeout(enemy.switchAnim('attack'), 500);

    if (this.playerhealth.value <= 0) {
      player.switchAnim('death');
      this.losspop.classList.add("active");
      this.wordsEntered.innerHTML = wordsEntered;
      this.enemiesDefeated.innerHTML = enemiesDefeated;
      intervals.forEach(clearInterval);
    } else { 
      player.switchAnim('hit');
    }
  }

  inputhandler(e) {
    const inputs = new Input()
    if (e.keyCode === 13) {
      if (inputs.check()) {
        // WORD RESET
        player.switchAnim('attack');
        wordsEntered += 1;
        this.value = "";
        let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
        document.querySelector("#word").innerText = newword;

        // ENEMY TAKES DAMAGE
        this.enemyhealth = document.querySelector(".enemy-bar");
        this.playerhealth = document.querySelector(".player-bar");
        let damage = Math.floor(Math.random() * (50 - 25) + 25);
        this.enemyhealth.value -= damage;
        setTimeout(enemy.switchAnim('hit'), 500);

        let enemyhealth = this.enemyhealth.value;
        if (enemyhealth <= 0) {
          currentlvl += 1;
          enemiesDefeated += 1;
          inputs.startLevel(currentlvl);
          this.playerhealth.value += 15;
          setTimeout(enemy.switchAnim('death'), 500);
          enemy = enemySprites[Math.floor(Math.random() * enemySprites.length)];
        }
      } 
    } else {
      player.switchAnim('idle');
    }
  }
}

let background = new Image();
background.src = "./src/images/background.png"

export function animate() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, -1510, -150);

  player.update(ctx);
  enemy.revUpdate(ctx);

  requestAnimationFrame(animate);
};