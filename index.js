// import Game from "./src/scripts/game"
// import Music from "./src/scripts/music"

document.addEventListener("DOMContentLoaded", function() {  
  
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');

  canvas.width = 1400;
  canvas.height = 600;

  c.fillRect(0, 0, canvas.width, canvas.height);

  // let game = new Game();
  // game.render();
  // game.addEventListeners();

  // let music = new Music();
  // music.addEventListeners();
});

// class Sprite {
//   constructor(position) {
//     this.position = position;
//   }

//   draw() {
//     c.fillStyle = 'red'
//     c.fillRect(this.position.x, this.position.y, 50, 150);
//   }
// }


