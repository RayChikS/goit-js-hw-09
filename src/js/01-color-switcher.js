const btnStart = document.querySelector('button[data-start]');

const btnStop = document.querySelector('button[data-stop]');

const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
});
