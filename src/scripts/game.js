import Input from "./input"
import Word from "./word"

export default class Game {
  constructor() {
    this.inputs = new Input()
    this.current_word = new Dictionary()
    this.newgame = document.querySelector("#start-button")
    this.started = false;
  }

  addEventListeners() {
    this.newgame.addEventListener("click", (listener) => {
      if (!this.started) {
        this.newgame.innerText = "Restart"
        this.started = true;
      } else {
        this.newgame.innerText = "Restart"
        this.started = true;
      }
    });ß
  }
}