import { TextSound, Sounds } from "./data";

const root = document.getElementById("main");
const h2 = document.createElement("h2");
const rain = document.getElementById("audio-rain");
const summer = document.getElementById("audio-summer");
const winter = document.getElementById("audio-winter");
const playBtnRain = document.getElementById("play-rain");
const playBtnWinter = document.getElementById("play-winter");
const playBtnSummer = document.getElementById("play-summer");
const volume = document.getElementById("volume");

let currenSound = {};

playBtnRain.textContent = TextSound.rain;
playBtnWinter.textContent = TextSound.winter;
playBtnSummer.textContent = TextSound.summer;

const onItemClick = function (item, sound) {
  // остановить текущий звук
  if (currenSound.id && currenSound.id !== sound) {
    currenSound.sound.pause();
  }

  item.volume = volume.value;

  currenSound.id = sound;
  currenSound.sound = item;

  if (item.paused) {
    item.play();
  } else {
    item.pause();
  }
};

playBtnRain.addEventListener("click", function () {
  onItemClick(rain, Sounds.RAIN);
});

playBtnSummer.addEventListener("click", function () {
  onItemClick(summer, Sounds.SUMMER);
});

playBtnWinter.addEventListener("click", function () {
  onItemClick(winter, Sounds.WINTER);
});

volume.addEventListener("input", function () {
  if (currenSound.id) {
    currenSound.sound.volume = this.value;
  }
});
