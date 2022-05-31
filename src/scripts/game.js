import Dictionary from "./dictionary.js";
import Input from "./input.js";
import Level from "./level.js";
import Sprite from "./sprite.js";

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
      
      this.renderEntities(this.ctx);
      this.setup();
      
    });

    this.input.addEventListener("keyup", this.inputhandler)
  }

  setup() {
    this.playerhealth.value = 100;
    currentlvl = 1
    const level = new Level(1);
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
      console.log("L")
      intervals.forEach(clearInterval);
    }
  }

  renderEntities() {
    const player = new Sprite({
      position: {x: 0, y: 0},
      imageSrc: "../../assets/player/Idle.png",
      scale: 1,
      framesMax: 8,
      // sprites: null
    });
    player.draw();
  }
}