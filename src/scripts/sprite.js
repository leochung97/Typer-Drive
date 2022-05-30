export default class Sprite {
  constructor(position) {
    this.position = position;
  }

  draw() {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 200, 400);
  }
}