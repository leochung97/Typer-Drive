export default class Sprite {
  constructor(position, type) {
    this.position = position;
    this.type = type;
  }

  draw() {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, c.width, c.height);
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 200, 400);
  }
}