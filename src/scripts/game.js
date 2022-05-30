import Dictionary from "./dictionary.js";
import Input from "./input.js"

export default class Game {
  constructor() {
    this.input = document.querySelector("#input");
    this.start = document.querySelector("#start-button");
    this.started = false;
    this.currentLevel = 1;
    this.newWord = this.newWord.bind(this);
  }

  newWord() {
    let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
    document.querySelector("#word").innerText = newword;
  }

  addEventListeners() {
    this.start.addEventListener("click", (listener) => {
      if (!this.started) {
        this.start.innerText = "Restart"
        this.started = true;
        this.currentLevel = 1;
        this.startLevel(this.currentLevel)
      } else {
        this.start.innerText = "Restart"
        this.started = true;
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
        let newword = Dictionary[Math.floor(Math.random() * Dictionary.length)];
        document.querySelector("#word").innerText = newword;
        this.value = "";
      }
    }
  }

  startLevel(level) {
    if (this.started) {
      console.log("Generate word and start typing!")
    }
  }
}