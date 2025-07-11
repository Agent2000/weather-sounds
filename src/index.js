import { TextSound, Sounds, PathBg, PathIcons } from "./data";
import "./index.scss";

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

let currenSound = {};

const changeBodyAfterBg = function (imageUrl) {
  document.documentElement.style.setProperty(
    "--body-after-bg",
    `url('${imageUrl}')`
  );
};

const onItemClick = function (item, sound, image) {
  if (currenSound.id && currenSound.id !== sound) {
    currenSound.sound.pause();
  }

  item.volume = volume.value;

  currenSound.id = sound;
  currenSound.sound = item;

  if (item.paused) {
    item.play();
    changeBodyAfterBg(PathBg[sound]);
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
