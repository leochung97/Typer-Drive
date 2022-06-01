export default class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    framesCurrent = 0,
    holdFramesFor = 8,
    offset = {x: 0, y: 0},
    animations
  }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = framesCurrent;
    this.totalFrames = 0;
    this.holdFramesFor = holdFramesFor;
    this.offset = offset;
    this.animations = animations;
  }

  update(ctx) {
    this.draw(ctx);
    this.totalFrames += 1;
    if (this.totalFrames % this.holdFramesFor === 0) {
      this.framesCurrent = (this.framesCurrent + 1) % this.framesMax;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      this.image.width / this.framesMax * this.scale,
      this.image.height * this.scale
    );
  }

  switchAnim(animation) {
    
  }
}