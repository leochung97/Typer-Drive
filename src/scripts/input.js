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

  addEventListeners() {
    this.input.addEventListener("keyup", this.check);
  }
}