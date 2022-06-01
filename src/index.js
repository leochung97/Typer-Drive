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

function loadImages(arr, callback) {
  let images = {};
  let loadedImageCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let img = new Image();
    img.onload = imageLoaded;
    img.src = arr[i];
    images[arr[i]] = img;
  }

  function imageLoaded(e) {
    loadedImageCount++;
    if (loadedImageCount >= arr.length) {
      callback();
    }
  }
}

let loader = loadImages([
  "../assets/images/background.png",
  "../assets/images/enemy_attack.png",
  "../assets/images/enemy_death.png",
  "../assets/images/enemy_hit.png",
  "../assets/images/enemy_idle.png",
  "../assets/images/player_attack.png",
  "../assets/images/player_death.png",
  "../assets/images/player_hit.png",
  "../assets/images/player_idle.png"
], function() {
  console.log("loaded");
})