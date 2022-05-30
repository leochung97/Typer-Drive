// import Word from "./word.js"

export default class Input {
  constructor(level) {
    this.level = level;
    this.input = document.querySelector("#input")
    this.typed = "";
  }

  handler(e) {
    this.typed += e;
    console.log(this.typed)
  }

  addEventListeners() {
    this.input.addEventListener("keyup", this.handler);
    this.input.addEventListener("keydown", this.handler);
    this.input.addEventListener("keypress", this.handler);
  }

}