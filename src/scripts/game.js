import Dictionary from "./dictionary.js";
import Input from "./input.js"
import Level from "./level.js";

let currentlvl = 1;

export default class Game {  
  constructor(c) {
    this.input = document.querySelector("#input");
    this.word = document.querySelector("#word");
    this.start = document.querySelector("#start-button");
    this.playerbar = document.querySelector(".player-health-bar");
    this.enemybar = document.querySelector(".enemy-health-bar");
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
        this.newword();
        this.input.placeholder = "Type Here!";
        this.playerbar.style.display = "block";
        this.enemybar.style.display = "block";
        currentlvl = 1
        const level = new Level(1);
      } else {
        this.start.innerText = "Restart"
        this.started = true;
        this.newword();
        this.playerbar.style.display = "block";
        this.enemybar.style.display = "block";
        this.input.placeholder = "Type Here!";
        const level = new Level(1);
        currentlvl = 1;
      }
    });

    this.input.addEventListener("keyup", this.inputhandler)
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
        let damage = Math.floor(Math.random() * (100 - 20) + 25);
        console.log(damage);
        this.enemyhealth.value -= damage;

        let enemyhealth = this.enemyhealth.value;
        if (enemyhealth <= 0) {
          currentlvl += 1;
          inputs.startLevel(currentlvl);
        }
      }
    }
  }

  playerdamage() {
    this.playerhealth = document.querySelector(".player-bar");
    let enemydamage = currentlvl * 10 + 5
    if (this.playerhealth.value <= 0) {
      alert("You lost!")
    }
  }
}