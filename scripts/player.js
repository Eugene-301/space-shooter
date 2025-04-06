const root = document.querySelector(".root");
const player = document.querySelector(".player");

const positionMin = 0;
const positionMax = 100;
const playerSize = (100 * player.offsetWidth) / window.innerWidth;

let position = 0;

export const initPlayer = () => {
  document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;

    if (keyPressed === "ArrowRight" || keyPressed === "d") {
      if (position >= positionMax - playerSize) return;

      position += 2;
      player.style.left = `${position}%`;
    } else if (keyPressed === "ArrowLeft" || keyPressed === "a") {
      if (position === positionMin) return;

      position -= 2;
      player.style.left = `${position}%`;
    }
  });
};

export default {
  initPlayer: initPlayer,
};
