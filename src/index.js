import { textRain } from "./data";

const root = document.getElementById("main");
const h2 = document.createElement("h2");
const audioRain = document.getElementById("audio-rain");
const playBtnRain = document.getElementById("play-rain");

h2.innerText = "Привет javascript!";
root.append(h2);
playBtnRain.textContent = textRain;

playBtnRain.addEventListener("click", function () {
  if (audioRain.paused) {
    audioRain.play();
    playBtnRain.textContent = textRain + " ||";
  } else {
    audioRain.pause();
    playBtnRain.textContent = textRain + " >";
  }
});
