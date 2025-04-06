const root = document.querySelector(".root");
const originalMeteor = document.querySelector(".meteor");

const meteorSize = (originalMeteor.offsetWidth * 100) / window.innerWidth;
const maxPosition = 100 - meteorSize;

export const initMeteors = () => {
  setInterval(() => {
    let randomPosition = Math.floor(Math.random() * (maxPosition + 1));

    const meteorHTML = `<div class='meteor' style="left: ${randomPosition}%"><img src='./assets/images/enemy-meteor.png'alt='вражеский метеорит'class='meteor__img img'/></div>`;

    root.insertAdjacentHTML("afterbegin", meteorHTML);
  }, 100);
};

export default {
  initMeteors: initMeteors,
};
