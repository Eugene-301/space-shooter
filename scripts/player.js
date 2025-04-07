const root = document.querySelector(".root");
const player = document.querySelector(".player");

const positionMin = 0;
const positionMax = 100;
const playerSize = getComputedStyle(document.documentElement).getPropertyValue(
  "--player-x-size"
);

let position = Number(
  getComputedStyle(document.documentElement)
    .getPropertyValue("--player-start-pos")
    .replace("%", "")
);

let keysState = {
  left: false,
  right: false,
};

const checkIsMove = setInterval(() => {
  if (keysState.right) {
    if (position >= positionMax - playerSize) return;

    position += 2;
    player.style.left = `${position}%`;
  } else if (keysState.left) {
    if (position === positionMin) return;

    position -= 2;
    player.style.left = `${position}%`;
  }
}, 75);

export const initPlayer = () => {
  document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;

    if (keyPressed === "ArrowRight" || keyPressed === "d") {
      keysState.right = true;
    } else if (keyPressed === "ArrowLeft" || keyPressed === "a") {
      keysState.left = true;
    }
  });

  document.addEventListener("keyup", (e) => {
    const keyPressed = e.key;

    if (keyPressed === "ArrowRight" || keyPressed === "d") {
      keysState.right = false;
    } else if (keyPressed === "ArrowLeft" || keyPressed === "a") {
      keysState.left = false;
    }
  });
};

export default {
  initPlayer: initPlayer,
};
