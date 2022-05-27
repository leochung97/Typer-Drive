export default class Music {
  constructor() {
    this.music = document.querySelector("#game-music");
    this.volume = document.querySelector("#volume");
    this.toggle = document.querySelector("#mute-button");
    this.muted = true;
    this.music.volume = 0.05;
  }

  muteAudio() {
    if (!this.muted) {
      this.music.pause();
      this.toggle.innerText = "Unmute";
      this.muted = true;
    } else {
      this.music.play();
      this.toggle.innerText = "Mute";
      this.muted = false;
    }
  }

  addEventListeners() {
    this.toggle.addEventListener("click", (e) => {
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
  }
}