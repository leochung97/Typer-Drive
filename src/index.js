import Game from "./scripts/game.js"
import Music from "./scripts/music.js"
import { animate } from "./scripts/game.js"

let background = new Image();
background.src = "../assets/background.png"

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 550;

  ctx.drawImage(background, -1510, -150);

  let game = new Game();
  game.addEventListeners();

  let music = new Music();
  music.addEventListeners();

  animate();

  const open = document.querySelector("#instructions-button");
  const close = document.querySelector("#instructions-exit");
  const instructions = document.querySelector("#instructions");
  
  function openPopup(instructions) {
    instructions.classList.add("active");
  }

  function closePopup(instructions) {
    instructions.classList.remove("active");
  }

  open.addEventListener("click", openPopup(instructions));
  close.addEventListener("click", console.log("CLICKED OUT"));
});



