import Game from "./scripts/game.js"
import Music from "./scripts/music.js"
import Sprite from "./scripts/sprite.js"

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 550;

  let game = new Game();
  game.addEventListeners();

  let music = new Music();
  music.addEventListeners();

  function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    let background = new Image();
    background.src = "../assets/background.png"
    background.onload = function () {
      ctx.drawImage(background, -1510, -150)
    }
    requestAnimationFrame(animate);
  };

  animate();
});