export default class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    framesCurrent = 0,
    holdFramesFor = 5,
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
    this.dead = false;

    for (let anim in this.animations) {
      animations[anim].image = new Image()
      animations[anim].image.src = animations[anim].imageSrc
    }
  }

  update(ctx) {
    this.draw(ctx);
    
    this.totalFrames += 1;
    if (this.totalFrames % this.holdFramesFor === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent += 1;
      } else {
        this.framesCurrent = 0;
      }
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
  
  switchAnim(anim) {
    if (this.image === this.animations.death.image) {
      if (this.framesCurrent === this.animations.death.framesMax - 1) {
        this.dead = true;
      }
    }

    switch(anim) {
      case 'idle':
        if (this.image !== this.animations.idle.image) {
          this.image = this.animations.idle.image;
          this.framesMax = this.animations.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack':
        if (this.image !== this.animations.attack.image) {
          this.image = this.animations.attack.image;
          this.framesMax = this.animations.attack.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'death':
        if (this.image !== this.animations.death.image) {
          this.image = this.animations.death.image;
          this.framesMax = this.animations.death.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'hit':
        if (this.image !== this.animations.hit.image) {
          this.image = this.animations.hit.image;
          this.framesMax = this.animations.hit.framesMax;
          this.framesCurrent = 0;
        }
        break;
    }
  }
}