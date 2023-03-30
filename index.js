const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let time = seconds;
    let timeSeconds;
    let timeMinutes;
    let timeHours;

    function updateTimer() {
      timeSeconds = Math.floor(time % 60);
      timeMinutes = Math.floor(time / 60) % 60;
      timeHours = Math.floor(time / 60 / 60) % 24;

      let strTime = `${timeHours < 10 ? "0" + timeHours : timeHours}:${
        timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      }:${timeSeconds < 10 ? "0" + timeSeconds : timeSeconds}`;

      timerEl.innerHTML = strTime;
      time <= 0 ? clearInterval(timerID) : time--;
    }

    const timerID = setInterval(updateTimer, 1000);
    updateTimer();
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  if (!Number(inputEl.value)) inputEl.value = "";
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
