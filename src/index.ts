import data from "./data";
import "./index.scss";

let plaingMusicId: string | undefined;
const list = document.querySelector(".weather-list") as HTMLElement;
const volume = document.querySelector(".volume-controller") as HTMLInputElement;
const audioElement = new Audio();

audioElement.loop = true;

volume.addEventListener("input", (e: Event) => {
  audioElement.volume =
    Number((e.currentTarget as HTMLInputElement).value) / 100;
});
const changeBodyAfterBg = function (imageUrl: string) {
  document.documentElement.style.setProperty(
    "--body-after-bg",
    `url('${imageUrl}')`
  );
};

list.addEventListener("click", ({ target }) => {
  const targetId = (
    (target as Element).closest("[data-item-id]") as HTMLElement
  )?.dataset.itemId;

  if (!targetId) return;

  const item = data.find((i) => i.id === targetId);

  if (!item) return;

  if (plaingMusicId !== item.id) {
    plaingMusicId = item.id;
    audioElement.src = item.sound;
    audioElement.play();
    changeBodyAfterBg(item.bg);
    return;
  }

  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});
const renderItem = function (item: any) {
  const elemItem = document.createElement("div");
  const btnItem = document.createElement("button");
  const iconItem = document.createElement("img");

  btnItem.classList.add("weather-item");
  iconItem.classList.add("weather-item-icon");

  btnItem.dataset.itemId = item.id;
  btnItem.style.backgroundImage = `url("${item.bg}")`;
  iconItem.src = item.icon;

  btnItem.append(iconItem);
  elemItem.append(btnItem);
  list.append(elemItem);
};

data.forEach(renderItem);
