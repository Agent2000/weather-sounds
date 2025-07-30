import { TextSound, Sounds, PathBg, PathIcons, BtnIds } from "./data";
import "./index.scss";

const rain = document.getElementById("audiRain");
const summer = document.getElementById("audiSummer");
const winter = document.getElementById("audiWinter");

const volume = document.getElementById("volume");
const btnlist = document.querySelector(".audio-btn-group");

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

btnlist.addEventListener("click", ({ target }) => {
  const targetId = target.closest("[id]").id;

  if (!targetId) return;

  if (targetId === BtnIds.summer) onItemClick(summer, Sounds.SUMMER, imgSummer);
  if (targetId === BtnIds.rain) onItemClick(rain, Sounds.RAIN, imgRain);
  if (targetId === BtnIds.winter) onItemClick(winter, Sounds.WINTER, imgWinter);
});

volume.addEventListener("input", function () {
  if (currenSound.id) {
    currenSound.sound.volume = this.value;
  }
});
