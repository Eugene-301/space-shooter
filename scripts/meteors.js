import { restartGame } from "./menu.js";

const root = document.querySelector(".root");
const player = document.querySelector(".player");

const meteorImgSrc = "./assets/images/enemy-meteor.png";

const meteorSizeX = getComputedStyle(document.documentElement).getPropertyValue(
  "--meteor-x-size"
);
const meteorSizeY = getComputedStyle(document.documentElement).getPropertyValue(
  "--meteor-y-size"
);
const maxPosition = 100 - Number(meteorSizeX.replace("%", ""));
const meteorSpeed = 1;

const createMeteor = () => {
  const randomPosition = Math.floor(Math.random() * (maxPosition + 1));

  const meteorDiv = document.createElement("div");
  const meteorImg = document.createElement("img");

  meteorImg.src = meteorImgSrc;
  meteorImg.className = "meteor__img";

  meteorDiv.className = "meteor";
  meteorDiv.style.left = `${randomPosition}%`;
  meteorDiv.appendChild(meteorImg);

  root.appendChild(meteorDiv);

  return meteorDiv;
};

export const initMeteors = (modifier = 1) => {
  const meteorSpawning = setInterval(() => {
    const meteor = createMeteor();

    let yMeteorPosition = 0;

    const meteorMove = setInterval(() => {
      yMeteorPosition += meteorSpeed * modifier;
      meteor.style.top = `${yMeteorPosition}%`;

      const meteorCoords = meteor.getBoundingClientRect();
      const playerRect = player.getBoundingClientRect();

      if (
        playerRect.left < meteorCoords.right &&
        playerRect.right > meteorCoords.left &&
        playerRect.top < meteorCoords.bottom &&
        playerRect.bottom > meteorCoords.top
      ) {
        clearInterval(meteorSpawning);
        restartGame();
        while (document.querySelector(".meteor")) {
          document.querySelector(".meteor").remove();
        }
      }

      if (yMeteorPosition > maxPosition + meteorSizeY) {
        meteor.remove();
        clearInterval(meteorMove);
      }
    }, 150);
  }, 2000 / modifier);
};

export default {
  initMeteors: initMeteors,
};
