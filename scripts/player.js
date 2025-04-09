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

let updateFrame;

const startFrames = () => {
  updateFrame = setInterval(() => {
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
};

const stopFrames = () => {
  clearInterval(updateFrame);
};

export const initPlayer = () => {
  startFrames();
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

export const stopPlayer = () => {
  stopFrames();
};

export default {
  initPlayer: initPlayer,
  stopPlayer: stopPlayer,
};
