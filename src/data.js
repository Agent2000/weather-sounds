"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sun_svg_1 = __importDefault(require("./assets/icons/sun.svg"));
const cloud_rain_svg_1 = __importDefault(require("./assets/icons/cloud-rain.svg"));
const cloud_snow_svg_1 = __importDefault(require("./assets/icons/cloud-snow.svg"));
const summer_mp3_1 = __importDefault(require("./assets/sounds/summer.mp3"));
const rain_mp3_1 = __importDefault(require("./assets/sounds/rain.mp3"));
const winter_mp3_1 = __importDefault(require("./assets/sounds/winter.mp3"));
const summer_bg_jpg_1 = __importDefault(require("./assets/summer-bg.jpg"));
const rainy_bg_jpg_1 = __importDefault(require("./assets/rainy-bg.jpg"));
const winter_bg_jpg_1 = __importDefault(require("./assets/winter-bg.jpg"));
exports.default = [
    {
        id: "9641b98f",
        icon: sun_svg_1.default,
        sound: summer_mp3_1.default,
        bg: summer_bg_jpg_1.default,
    },
    {
        id: "1dba2ddb",
        icon: cloud_rain_svg_1.default,
        sound: rain_mp3_1.default,
        bg: rainy_bg_jpg_1.default,
    },
    {
        id: "22b8f1ef",
        icon: cloud_snow_svg_1.default,
        sound: winter_mp3_1.default,
        bg: winter_bg_jpg_1.default,
    },
];
