import Game from "./scripts/game.js"
import Music from "./scripts/music.js"
import Instruction from "./scripts/instruction.js"
import { animate } from "./scripts/game.js"

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 550;

  let game = new Game();
  game.addEventListeners();

  let music = new Music();
  music.addEventListeners();

  let instruction = new Instruction();
  instruction.addEventListeners();

  animate();
});



