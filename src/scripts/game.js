import Input from "./input"

export default class Game {
  constructor() {
    this.input = new Input()
    // this.current_word = new Dictionary()
    this.start = document.querySelector("#start-button")
    this.started = false;
    this.currentLevel = 1;
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
  }

  startLevel(level) {
    if (this.started) {
      console.log("Generate word and start typing!")
    }
  }
}