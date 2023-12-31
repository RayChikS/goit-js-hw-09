const btnStart = document.querySelector('button[data-start]');

const btnStop = document.querySelector('button[data-stop]');

const body = document.querySelector('body');

let timerId = 0;

const divElement = document.createElement('div');

btnStop.disabled = true;

divElement.appendChild(btnStart);
divElement.appendChild(btnStop);

document.body.appendChild(divElement);

divElement.style.display = 'flex';
divElement.style.alignItems = 'center';
divElement.style.justifyContent = 'center';
divElement.style.height = '100vh';
divElement.style.gap = '20px';
btnStart.style.padding = '10px 15px';
btnStop.style.padding = '10px 15px';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
