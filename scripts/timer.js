const timer = document.querySelector(".timer");

let timerCount = 0;

let timerInterval = null;

const startTimer = () => {
  timerInterval = setInterval(() => {
    timerCount++;
    timer.textContent = `Время: ${timerCount}`;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  alert(`Survival time ${timerCount}`);

  timerCount = 0;
  timer.textContent = `Время: ${timerCount}`;
};

export default {
  startTimer: startTimer,
  stopTimer: stopTimer,
};
