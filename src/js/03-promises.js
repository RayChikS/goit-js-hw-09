import Notiflix from 'notiflix';
const form = document.querySelector('.form');
// const firstDelay = document.querySelector('input[name="delay"]');
// const stepDelay = document.querySelector('input[name="step');
const amount = document.querySelector('input[name="amount');
// const submit = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

form.addEventListener('submit', () => {
  for (let i = 0; i < amount.value; i++) {
    createPromise();
  }
});
