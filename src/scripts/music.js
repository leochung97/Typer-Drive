export default class Music {
  constructor() {
    this.music = document.querySelector("#game-music");
    this.toggle = document.querySelector("#mute-button");
    this.muted = true;
    this.music.volume = 0.01;
  };

  addEventListeners() {
    this.toggle.addEventListener("click", (listener) => {
      if (!this.muted) {
        this.music.currentTime = 0;
        this.music.play();
        this.toggle.innerText = "Mute";
        this.muted = true;
      } else {
        this.music.pause();
        this.toggle.innerText = "Play";
        this.muted = false;
      }
    });
  };
}