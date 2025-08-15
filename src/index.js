"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
require("./index.scss");
let plaingMusicId;
const list = document.querySelector(".weather-list");
const volume = document.querySelector(".volume-controller");
const audioElement = new Audio();
audioElement.loop = true;
volume.addEventListener("input", (e) => {
    audioElement.volume =
        Number(e.currentTarget.value) / 100;
});
const changeBodyAfterBg = function (imageUrl) {
    document.documentElement.style.setProperty("--body-after-bg", `url('${imageUrl}')`);
};
list.addEventListener("click", ({ target }) => {
    const targetId = target.closest("[data-item-id]")?.dataset.itemId;
    if (!targetId)
        return;
    const item = data_1.default.find((i) => i.id === targetId);
    if (!item)
        return;
    if (plaingMusicId !== item.id) {
        plaingMusicId = item.id;
        audioElement.src = item.sound;
        audioElement.play();
        changeBodyAfterBg(item.bg);
        return;
    }
    if (audioElement.paused) {
        audioElement.play();
    }
    else {
        audioElement.pause();
    }
});
const renderItem = function (item) {
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
data_1.default.forEach(renderItem);
