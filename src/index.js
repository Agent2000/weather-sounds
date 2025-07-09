import { TextSound, Sounds, PathBg, PathIcons } from "./data";
import "./index.scss";

const body = document.body;
const h2 = document.createElement("h2");
const rain = document.getElementById("audiRain");
const summer = document.getElementById("audiSummer");
const winter = document.getElementById("audiWinter");
const playBtnRain = document.getElementById("btnRain");
const playBtnWinter = document.getElementById("btnWinter");
const playBtnSummer = document.getElementById("btnSummer");
const volume = document.getElementById("volume");

const imgSummer = document.getElementById("imgSummer");
const imgRain = document.getElementById("imgRain");
const imgWinter = document.getElementById("imgWinter");

// playBtnRain.style.backgroundImage =

let currenSound = {};

const onItemClick = function (item, sound, image) {
  // остановить текущий звук
  if (currenSound.id && currenSound.id !== sound) {
    currenSound.sound.pause();
  }

  item.volume = volume.value;

  currenSound.id = sound;
  currenSound.sound = item;

  if (item.paused) {
    item.play();
    body.style.backgroundImage = `url(${PathBg[sound]})`;
    image.src = PathIcons[sound];
  } else {
    item.pause();
    image.src = "./assets/icons/pause.svg";
  }
};

playBtnSummer.addEventListener("click", function () {
  onItemClick(summer, Sounds.SUMMER, imgSummer);
});

playBtnRain.addEventListener("click", function () {
  onItemClick(rain, Sounds.RAIN, imgRain);
});

playBtnWinter.addEventListener("click", function () {
  onItemClick(winter, Sounds.WINTER, imgWinter);
});

volume.addEventListener("input", function () {
  if (currenSound.id) {
    currenSound.sound.volume = this.value;
  }
});
