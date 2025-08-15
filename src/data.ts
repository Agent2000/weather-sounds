import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/cloud-rain.svg";
import snowIcon from "./assets/icons/cloud-snow.svg";

import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";

import summerBg from "./assets/summer-bg.jpg";
import rainyBg from "./assets/rainy-bg.jpg";
import winterBg from "./assets/winter-bg.jpg";

export default [
  {
    id: "9641b98f",
    icon: sunIcon,
    sound: summerSound,
    bg: summerBg,
  },
  {
    id: "1dba2ddb",
    icon: rainIcon,
    sound: rainSound,
    bg: rainyBg,
  },
  {
    id: "22b8f1ef",
    icon: snowIcon,
    sound: winterSound,
    bg: winterBg,
  },
];
