// import Game from "./scripts/game"
import Music from "./scripts/music.js"
// import Sprite from "./scripts/sprite"

document.addEventListener("DOMContentLoaded", function() {  
  
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');

  canvas.width = 1080;
  canvas.height = 550;

  c.fillStyle = "gray";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // let game = new Game();
  // game.render();
  // game.addEventListeners();

  let music = new Music();
  music.addEventListeners();
});

// const test_player = new Sprite({x: 312, y: 300});
// test_player.draw();