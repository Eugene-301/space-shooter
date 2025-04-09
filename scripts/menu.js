import meteors from "./meteors.js";
import player from "./player.js";
import timer from "./timer.js";
import sounds from "./sounds.js";

const modesModifiers = {
  easy: 1,
  normal: 2,
  hard: 3,
};

const menuHtml =
  '<div class="menu"><h1 class="menu__title">Space shooter</h1><div class="menu__btn-container"><button class="menu__btn" id="mode-easy-btn">Easy mode</button><button class="menu__btn" id="mode-normal-btn">Normal mode</button><button class="menu__btn" id="mode-hard-btn">Hard mode</button></div></div>';

const drawMenu = () => {
  document.querySelector(".root").insertAdjacentHTML("afterbegin", menuHtml);
};

const removeMenu = () => {
  document.querySelector(".menu").remove();
};

const initMenu = () => {
  drawMenu();
  sounds.menuAmbient();

  const easyBtn = document.querySelector("#mode-easy-btn");
  const normalBtn = document.querySelector("#mode-normal-btn");
  const hardBtn = document.querySelector("#mode-hard-btn");

  easyBtn.addEventListener("click", () => {
    removeMenu();
    meteors.initMeteors(modesModifiers.easy);
    player.initPlayer();
    timer.startTimer();
    sounds.gameAmpient();
  });

  normalBtn.addEventListener("click", () => {
    removeMenu();
    meteors.initMeteors(modesModifiers.normal);
    player.initPlayer();
    timer.startTimer();
    sounds.gameAmpient();
  });

  hardBtn.addEventListener("click", () => {
    removeMenu();
    meteors.initMeteors(modesModifiers.hard);
    player.initPlayer();
    timer.startTimer();
    sounds.gameAmpient();
  });
};

export const restartGame = () => {
  player.stopPlayer();
  initMenu();
  timer.stopTimer();
};

export default {
  initMenu: initMenu,
  restartGame: restartGame,
};
