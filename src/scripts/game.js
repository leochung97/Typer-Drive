import Dictionary from "./dictionary.js";
import Input from "./input.js";
import Level from "./level.js";
import Sprite from "./sprite.js"

let currentlvl = 1;
let wordsEntered = 0;
let enemiesDefeated = 0;
let intervals = [];

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
    this.started = false;
  }

  newword() {
    let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
    this.word.innerText = newword;
  }

  addEventListeners() {
    this.start.addEventListener("click", (event) => {
      if (!this.started) {
        this.start.innerText = "Restart"
        this.started = true;
        intervals.forEach(clearInterval);
      } else {
        this.start.innerText = "Restart"
        this.started = true;
        intervals.forEach(clearInterval);
      }

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
    let timedplayerdamage = setInterval(this.playerdamage.bind(this), 1000);
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
    let enemydamage = (currentlvl * 2);
    this.playerhealth.value -= enemydamage;
    enemy.switchAnim('attack');
    enemy.switchAnim('idle');

    if (this.playerhealth.value <= 0) {
      player.switchAnim('death');
      player.dead = true;
      enemy.dead = true;
      this.losspop.classList.add("active");
      this.wordsEntered.innerHTML = wordsEntered;
      this.enemiesDefeated.innerHTML = enemiesDefeated;
      intervals.forEach(clearInterval);
    } else { 
      player.switchAnim('hit');
      player.switchAnim('idle');
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
        enemy.switchAnim('hit');

        let enemyhealth = this.enemyhealth.value;
        if (enemyhealth <= 0) {
          currentlvl += 1;
          enemiesDefeated += 1;
          inputs.startLevel(currentlvl);
          this.playerhealth.value += 15;
          enemy.switchAnim('death');
        }
      } 
    } else {
      player.switchAnim('idle');
    }
  }


}

let background = new Image();
background.src = "./src/images/background.png"

const player = new Sprite({
  position: { x: -175, y: 0 },
  imageSrc: "./src/images/player_idle.png",
  scale: 4,
  framesMax: 11,
  offset: { x: 0, y: 0 },
  animations: {
    idle: {
      imageSrc: "./src/images/player_idle.png",
      framesMax: 11
    },
    attack: {
      imageSrc: "./src/images/player_attack.png",
      framesMax: 7
    },
    death: {
      imageSrc: "./src/images/player_death.png",
      framesMax: 11
    },
    hit: {
      imageSrc: "./src/images/player_hit.png",
      framesMax: 4
    }
  }
});

const enemy = new Sprite({
  position: { x: 575, y: 55 },
  imageSrc: "./src/images/enemy_idle.png",
  scale: 4,
  framesMax: 8,
  offset: { x: 0, y: 0 },
  animations: {
    idle: {
      imageSrc: "./src/images/enemy_idle.png",
      framesMax: 8
    },
    attack: {
      imageSrc: "./src/images/enemy_attack.png",
      framesMax: 8
    },
    death: {
      imageSrc: "./src/images/enemy_death.png",
      framesMax: 5
    },
    hit: {
      imageSrc: "./src/images/enemy_hit.png",
      framesMax: 4
    }
  }
});

export function animate() {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, -1510, -150);

  player.update(ctx);
  enemy.update(ctx);

  requestAnimationFrame(animate);
};