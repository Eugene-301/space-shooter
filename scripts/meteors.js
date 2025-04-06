const root = document.querySelector(".root");
const maxPosition = 100 - meteorSize;

export const initMeteors = () => {
  setInterval(() => {
    let randomPosition = Math.floor(Math.random() * (maxPosition + 1));

    const meteorHTML = `<div class='meteor' style="left: ${randomPosition}%"><img src='./assets/images/enemy-meteor.png'alt='вражеский метеорит'class='meteor__img img'/></div>`;

    let colya = root.insertAdjacentHTML("afterbegin", meteorHTML);

    console.log(colya);
  }, 100);
};

export default {
  initMeteors: initMeteors,
};
