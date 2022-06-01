import Dictionary from "./dictionary.js";
import Input from "./input.js";
import Level from "./level.js";
import Sprite from "./sprite.js"

let currentlvl = 1;
let intervals = [];

export default class Game {  
  constructor() {
    this.input = document.querySelector("#input");
    this.word = document.querySelector("#word");
    this.start = document.querySelector("#start-button");
    this.playerbar = document.querySelector(".player-health-bar");
    this.enemybar = document.querySelector(".enemy-health-bar");
    this.playerhealth = document.querySelector(".player-bar")
    this.enemyhealth = document.querySelector(".enemy-bar")
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
    });

    this.input.addEventListener("keyup", this.inputhandler)
  }

  setup() {
    this.playerhealth.value = 100;
    currentlvl = 1
    new Level(1);
    this.newword();
    this.input.placeholder = "Type Here!";
    this.playerbar.style.display = "block";
    this.enemybar.style.display = "block";
    clearInterval(timedplayerdamage);
    let timedplayerdamage = setInterval(this.playerdamage, 5000);
    intervals.push(timedplayerdamage);
  }

  inputhandler(e) {
    const inputs = new Input()
    if (e.keyCode === 13) {
      if (inputs.check()) {
        // WORD RESET
        this.value = "";
        let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];        
        document.querySelector("#word").innerText = newword;

        // ENEMY DAMAGE
        this.enemyhealth = document.querySelector(".enemy-bar");
        this.playerhealth = document.querySelector(".player-bar");
        let damage = Math.floor(Math.random() * (100 - 20) + 25);
        console.log(damage);
        this.enemyhealth.value -= damage;

        let enemyhealth = this.enemyhealth.value;
        if (enemyhealth <= 0) {
          currentlvl += 1;
          inputs.startLevel(currentlvl);
          this.playerhealth.value += 15;
        }
      }
    }
  }

  playerdamage() {
    this.playerhealth = document.querySelector(".player-bar");
    let enemydamage = (currentlvl * 2) + 3;
    this.playerhealth.value -= enemydamage;
    console.log(enemydamage);
    if (this.playerhealth.value <= 0) {
      console.log("L");
      intervals.forEach(clearInterval);
    }
  }
}

let background = new Image();
background.src = "../assets/background.png"

let player = new Sprite({
  position: { x: -175, y: 0 },
  imageSrc: "../../assets/player/idle.png",
  scale: 4,
  framesMax: 11,
  offset: { x: 0, y: 0 },
  animations: {
    idle: {
      imageSrc: "../assets/player/Idle.png",
      framesMax: 11
    },
    attack1: {
      imageSrc: "../assets/player/Attack1.png",
      framesMax: 7
    },
    death: {
      imageSrc: "../assets/player/Death.png",
      framesMax: 11
    },
    hit: {
      imageSrc: "../assets/player/Take Hit.png",
      framesMax: 4
    }
  },
});

let enemy = new Sprite({
  position: { x: 575, y: 55 },
  imageSrc: "../../assets/enemies/Wizard/Idle.png",
  scale: 4,
  framesMax: 8,
  offset: { x: 0, y: 0 },
  animations: {
    idle: {
      imageSrc: "../assets/enemies/Wizard/Idle.png",
      framesMax: 8
    },
    attack1: {
      imageSrc: "../assets/enemies/Wizard/Attack1.png",
      framesMax: 8
    },
    death: {
      imageSrc: "../assets/enemies/Wizard/Death.png",
      framesMax: 5
    },
    hit: {
      imageSrc: "../assets/enemies/Wizard/Take Hit.png",
      framesMax: 4
    }
  },
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