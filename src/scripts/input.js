import Level from "./level.js"

export default class Input {
  constructor() {
    this.input = document.querySelector("#input")
  }

  check() {
    let word = document.querySelector("#word")
    let correct = false;
    if (input.value === word.innerText) {
      correct = true;
    } else {
      correct = false;
    }
    return correct;
  }

  startLevel(currentlvl) {
    return new Level(currentlvl);
  }

  addEventListeners() {
    this.input.addEventListener("keyup", this.check);
  }
}