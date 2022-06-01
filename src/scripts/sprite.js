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
    this.dead = false;
  }

  update(ctx) {
    this.draw(ctx);
    if (!this.dead) {
      this.totalFrames += 1;
      if (this.totalFrames % this.holdFramesFor === 0) {
        this.framesCurrent = (this.framesCurrent + 1) % this.framesMax;
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
  
  switchAnim(animation) {
    if (this.image === this.animations.death.image) {
      if (this.framesCurrent === this.animations.death.framesMax - 1) {
        this.dead = true;
      }
    }

    if (this.image === this.animations.attack1.image && 
      this.framesCurrent < this.animations.attack1.framesMax - 1) {
      return
    }
    
    if (this.image === this.animations.hit.image && 
      this.framesCurrent < this.animations.hit.framesMax - 1) {
      return
    }

    switch(animation) {
      case 'idle':
        if (this.image !== this.animations.idle.image) {
          this.image = this.animations.idle.image;
          this.framesMax = this.animations.idle.framesMax;
          this.framesCurrent = 0;
        }
        break;
      case 'attack1':
        if (this.image !== this.animations.attack1.image) {
          this.image = this.animations.attack1.image;
          this.framesMax = this.animations.attack1.framesMax;
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