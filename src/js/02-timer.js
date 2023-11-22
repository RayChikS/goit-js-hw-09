import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

let intervalId = 0;

const inputTime = document.querySelector('input[type="text"]');
const btnStart = document.querySelector('button[data-start]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    if (selectedDates[0] > now) {
      btnStart.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr(inputTime, options);

btnStart.addEventListener('click', () => {
  const endDate = new Date(inputTime.value).getTime();
  intervalId = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);

    const formattedDays = addLeadingZero(days);
    const formattedHours = addLeadingZero(hours);
    const formattedMinutes = addLeadingZero(minutes);
    const formattedSeconds = addLeadingZero(seconds);
    document.querySelector('[data-days]').textContent = formattedDays;
    document.querySelector('[data-hours]').textContent = formattedHours;
    document.querySelector('[data-minutes]').textContent = formattedMinutes;
    document.querySelector('[data-seconds]').textContent = formattedSeconds;

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
