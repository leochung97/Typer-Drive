const randomWords = require('random-words')

export default class Word {
  constructor() {
    this.word = randomWords();
    this.split = this.word.split('');
    this.answer = [];
  }

  check() {
    if (this.answer.length === this.split.length) {
      return this.answer === this.split;
    };
  }
}