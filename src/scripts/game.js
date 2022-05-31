import Dictionary from "./dictionary.js";
import Input from "./input.js"
import Level from "./level.js"

export default class Game {
  constructor(c) {
    this.input = document.querySelector("#input");
    this.word = document.querySelector("#word");
    this.start = document.querySelector("#start-button");
    this.playerhp = document.querySelector(".player-health-bar");
    this.enemyhp = document.querySelector(".enemy-health-bar");
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
        this.input.placeholder = "Type Here!"
        this.playerhp.style.display = "block"
        this.enemyhp.style.display = "block"
        this.currentLevel = 1;
        this.startLevel(this.currentLevel)
      } else {
        this.start.innerText = "Restart"
        this.started = true;
        this.newword();
        this.playerhp.style.display = "block"
        this.enemyhp.style.display = "block"
        this.input.placeholder = "Type Here!"
        this.currentLevel = 1;
        this.startLevel(this.currentLevel)
      }
    });

    this.input.addEventListener("keyup", this.inputhandler)
  }

  inputhandler(e) {
    const inputs = new Input()
    if (e.keyCode === 13) {
      if (inputs.check()) {
        this.value = "";
        let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
        document.querySelector("#word").innerText = newword;
      }
    }
  }

  startLevel(level) {
    if (this.started) {
      const currentlevel = new Level(level)
    }
  }
}