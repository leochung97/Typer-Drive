import Game from "./scripts/game.js"
import Music from "./scripts/music.js"

document.addEventListener("DOMContentLoaded", function() {  
  
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 550;

  let background = new Image();
  background.src = "../assets/background.png"
  background.onload = function() {
    c.drawImage(background, -1510, -150)
  }

  let game = new Game();
  game.addEventListeners();

  let music = new Music();
  music.addEventListeners();
});