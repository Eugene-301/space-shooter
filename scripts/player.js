const player = document.querySelector(".player");

const positionMin = 0;
const positionMax = screen.width;

let position = 0;

export const initPlayer = () => {
  document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;
    if (keyPressed === "ArrowRight" || keyPressed === "d") {
      if (position >= positionMax - player.offsetWidth) return;
      position += 35;
      player.style.left = `${position}px`;
    } else if (keyPressed === "ArrowLeft" || keyPressed === "a") {
      if (position <= positionMin) return;
      position -= 35;
      player.style.left = `${position}px`;
    }
  });
};

export default {
  initPlayer: initPlayer,
};
