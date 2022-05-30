export default class Word {
  constructor() {
    this.word = "Hello"
    this.split = this.word.split('');
    this.answer = [];
  }

  check() {
    if (this.answer.length === this.split.length) {
      return this.answer === this.split;
    };
  }
}