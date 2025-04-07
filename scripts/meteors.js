const root = document.querySelector(".root");
const originalMeteor = document.querySelector(".meteor");

const meteorImgSrc = "./assets/images/enemy-meteor.png";

const meteorSizeX = (originalMeteor.offsetWidth * 100) / window.innerWidth;
const meteorSizeY = (originalMeteor.offsetHeight * 100) / window.innerHeight;
const maxPosition = 100 - meteorSizeX;
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

export const initMeteors = setInterval(() => {
  const meteor = createMeteor();

  let yMeteorPosition = 0;

  const meteorMove = setInterval(() => {
    yMeteorPosition += meteorSpeed;
    meteor.style.top = `${yMeteorPosition}%`;

    if (yMeteorPosition > maxPosition + meteorSizeY) {
      meteor.remove();
      clearInterval(meteorMove);
    }
  }, 150);
}, 2000);

export default {
  initMeteors: initMeteors,
};
