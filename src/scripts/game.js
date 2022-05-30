import Dictionary from "./dictionary.js";
import Input from "./input.js"
import Level from "./level.js"

export default class Game {
  constructor() {
    this.input = document.querySelector("#input");
    this.word = document.querySelector("#word");
    this.start = document.querySelector("#start-button");
    this.started = false;
    this.currentLevel = 1;
    this.newword = this.newword.bind(this);
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
        this.currentLevel = 1;
        this.startLevel(this.currentLevel)
      } else {
        this.start.innerText = "Restart"
        this.started = true;
        this.newword();
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
      console.log("Generate word and start typing!")
    }
  }
}