const player = document.querySelector(".player");

export const initPlayer = () => {
  document.addEventListener("keydown", (e) => {
    const keyPressed = e.key;
    if (keyPressed === "ArrowRight" || keyPressed === "d") {
      console.log("its right");
    } else if (keyPressed === "ArrowLeft" || keyPressed === "a") {
      console.log("its left");
    }
  });
};

export default {
  initPlayer: initPlayer,
};
