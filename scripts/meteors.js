const root = document.querySelector(".root");

export const initMeteors = () => {
  setInterval(() => {
    const radomPosition = Math.random() * 100;
    const meteorHTML = `<div class='meteor' style="left: ${radomPosition}%"><img src='./assets/images/enemy-meteor.png'alt='вражеский метеорит'class='meteor__img img'/></div>`;

    root.insertAdjacentHTML("afterbegin", meteorHTML);
  }, 3000);
};

export default {
  initMeteors: initMeteors,
};
