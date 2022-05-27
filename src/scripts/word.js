import Dictionary from "./dictionary"

export default class Word {
  constructor() {
    this.word = getWord();
    this.split = this.word.split('');
    this.answer = [];   
  }

  getWord() {
    return Dictonary[Math.floor(Math.random() * Dictionary.length)]
  }
}