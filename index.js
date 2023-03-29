const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = () => {
  return (seconds) => {
    const intervalId = setInterval(() => {
      const hour = Math.floor(seconds / 3600);
      const minutes = Math.floor(
        hour > 0 ? (seconds - hour * 3600) / 60 : seconds / 60
      );
      const sec = seconds - (hour * 3600 + minutes * 60);
      timerEl.innerHTML = `${hour}:${minutes}:${sec}`;
      seconds -= 1;
      if (seconds < 0) {
        timerEl.innerHTML = "Время вышло!";
        clearInterval(intervalId);
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, "");
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
