import Game from "./scripts/game.js"
import Music from "./scripts/music.js"
import Sprite from "./scripts/sprite.js"

let background = new Image();
background.src = "../assets/background.png"

let player = new Sprite({
  position: { x: -175, y: 0 },
  imageSrc: "../../assets/player/Idle.png",
  scale: 4,
  framesMax: 11,
  offset: { x: 0, y: 0 },
      // sprites: null
});

let enemy = new Sprite({
  position: { x: 575, y: 55 },
  imageSrc: "../../assets/enemies/Wizard/Idle.png",
  scale: 4,
  framesMax: 8,
  offset: { x: 0, y: 0 }
});

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, -1510, -150);
    player.update();
    enemy.update();
    requestAnimationFrame(animate);
  };

  animate();
});