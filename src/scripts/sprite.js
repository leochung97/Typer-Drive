class Sprite {
  constructor(position) {
    this.position = position;
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, 300, 200);
  }
}