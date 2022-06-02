import Sprite from "./sprite.js"

const player = new Sprite({
  position: { x: -125, y: 0 },
  imageSrc: "./src/images/player_idle.png",
  scale: 4.5,
  framesMax: 10,
  animations: {
    idle: {
      imageSrc: "./src/images/player_idle.png",
      framesMax: 10
    },
    attack: {
      imageSrc: "./src/images/player_attack.png",
      framesMax: 8
    },
    death: {
      imageSrc: "./src/images/player_death.png",
      framesMax: 7
    },
    hit: {
      imageSrc: "./src/images/player_hit.png",
      framesMax: 3
    }
  }
});

// Evil Wizard
const enemy1 = new Sprite({
  position: { x: 575, y: 55 },
  imageSrc: "./src/images/enemy1_idle.png",
  scale: 4,
  framesMax: 8,
  animations: {
    idle: {
      imageSrc: "./src/images/enemy1_idle.png",
      framesMax: 8
    },
    attack: {
      imageSrc: "./src/images/enemy1_attack.png",
      framesMax: 8
    },
    death: {
      imageSrc: "./src/images/enemy1_death.png",
      framesMax: 5
    },
    hit: {
      imageSrc: "./src/images/enemy1_hit.png",
      framesMax: 4
    }
  }
});

// HERO KNIGHT
const enemy2 = new Sprite({
  position: { x: 525, y: 0 },
  imageSrc: "./src/images/enemy2_idle.png",
  scale: 4,
  framesMax: 11,
  animations: {
    idle: {
      imageSrc: "./src/images/enemy2_idle.png",
      framesMax: 11
    },
    attack: {
      imageSrc: "./src/images/enemy2_attack.png",
      framesMax: 7
    },
    death: {
      imageSrc: "./src/images/enemy2_death.png",
      framesMax: 11
    },
    hit: {
      imageSrc: "./src/images/enemy2_hit.png",
      framesMax: 4
    }
  }
})

// HUNTRESS
const enemy3 = new Sprite({
  position: { x: 525, y: 10 },
  imageSrc: "./src/images/enemy3_idle.png",
  scale: 4.5,
  framesMax: 8,
  animations: {
    idle: {
      imageSrc: "./src/images/enemy3_idle.png",
      framesMax: 8
    },
    attack: {
      imageSrc: "./src/images/enemy3_attack.png",
      framesMax: 5
    },
    death: {
      imageSrc: "./src/images/enemy3_death.png",
      framesMax: 8
    },
    hit: {
      imageSrc: "./src/images/enemy3_hit.png",
      framesMax: 3
    }
  }
})

// EVIL WIZARD 2
const enemy4 = new Sprite({
  position: { x: 475, y: -50 },
  imageSrc: "./src/images/enemy4_idle.png",
  scale: 3,
  framesMax: 8,
  animations: {
    idle: {
      imageSrc: "./src/images/enemy4_idle.png",
      framesMax: 8
    },
    attack: {
      imageSrc: "./src/images/enemy4_attack.png",
      framesMax: 8
    },
    death: {
      imageSrc: "./src/images/enemy4_death.png",
      framesMax: 7
    },
    hit: {
      imageSrc: "./src/images/enemy4_hit.png",
      framesMax: 3
    }
  }
})



export const playerSprite = player;
export const enemySprites = [enemy1, enemy2, enemy3, enemy4]