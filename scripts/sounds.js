const menuAmbient = new Audio("../assets/sounds/menu-ambient.mp3");
const gameAmbient = new Audio("../assets/sounds/game-ambient.mp3");
const defeatSound = new Audio("../assets/sounds/defeat-sound.mp3");

menuAmbient.volume = 0.1;
menuAmbient.loop = true;

gameAmbient.volume = 0.1;
menuAmbient.loop = true;

defeatSound.volume = 0.2;

const playMenuAmbient = () => {
  menuAmbient
    .play()
    .then(() => {
      document.removeEventListener("click", playMenuAmbient);
    })
    .catch((error) => {
      document.addEventListener("click", playMenuAmbient);
    });
};

const playGameAmbient = () => {
  menuAmbient.pause();
  gameAmbient.play();
};

const playDefeatSound = () => {
  gameAmbient.pause();
  defeatSound.play();
};

export default {
  defeatSound: playDefeatSound,
  menuAmbient: playMenuAmbient,
  gameAmpient: playGameAmbient,
};
