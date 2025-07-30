import { TextSound, Sounds, PathBg, PathIcons, BtnIds } from "./data";
import "./index.scss";

const rain = document.getElementById("audiRain") as HTMLAudioElement;
const summer = document.getElementById("audiSummer") as HTMLAudioElement;
const winter = document.getElementById("audiWinter") as HTMLAudioElement;

const volume = document.getElementById("volume") as HTMLInputElement;
const btnlist = document.querySelector(".audio-btn-group") as HTMLDivElement;

const imgSummer = document.getElementById("imgSummer") as HTMLImageElement;
const imgRain = document.getElementById("imgRain") as HTMLImageElement;
const imgWinter = document.getElementById("imgWinter") as HTMLImageElement;

let currenSound: { id: string | undefined; sound: any } = {
  id: undefined,
  sound: undefined,
};

const changeBodyAfterBg = function (imageUrl: any): void {
  document.documentElement.style.setProperty(
    "--body-after-bg",
    `url('${imageUrl}')`
  );
};

const onItemClick = function (
  item: HTMLAudioElement,
  sound: string,
  image: HTMLImageElement
): void {
  if (currenSound.id && currenSound.id !== sound) {
    currenSound.sound.pause();
  }

  item.volume = Number(volume.value);

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

btnlist.addEventListener("click", ({ target }): void => {
  if (!target) return;

  const targetId: string | undefined = (target as HTMLElement)?.closest(
    "[id]"
  )?.id;

  if (!targetId) return;

  if (targetId === BtnIds.summer) onItemClick(summer, Sounds.summer, imgSummer);
  if (targetId === BtnIds.rain) onItemClick(rain, Sounds.rain, imgRain);
  if (targetId === BtnIds.winter) onItemClick(winter, Sounds.winter, imgWinter);
});

volume.addEventListener("input", function () {
  if (currenSound.id) {
    currenSound.sound.volume = this.value;
  }
});
