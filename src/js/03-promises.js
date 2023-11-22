import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const stepDelay = document.querySelector('input[name="step');
const amount = document.querySelector('input[name="amount');
const btn = document.querySelector('button');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      const result = { position, delay };

      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

form.addEventListener('submit', evt => {
  evt.preventDefault();
  btn.disabled = true;
  let delay = parseInt(firstDelay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delay = parseInt(firstDelay.value) + i * parseInt(stepDelay.value);
  }
});
