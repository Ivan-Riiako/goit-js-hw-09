// Описан в документации
import flatpickr from 'flatpickr';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_blue.css');

// Notify
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const refs = {
  inputData: document.querySelector('input#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  outputDays: document.querySelector('[data-days]'),
  outputHours: document.querySelector('[data-hours]'),
  outputMinutes: document.querySelector('[data-minutes]'),
  outputSeconds: document.querySelector('[data-seconds]'),
};
let changeData = null;
let timerId = null;
flatpickr(refs.inputData, {
  locale: Ukrainian,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      changeData = selectedDates[0] - new Date();
      if (!(changeData > 0)) {
        //   alert('');
        //   Notify.warning('Please choose a date in the future');
          Report.warning(
            'Warning Data',
            'Please choose a date in the future',
            'Okay'
          );
      }
  },
});

  refs.btnStart.addEventListener('click', onClickStart);


function onClickStart() {
    if (!(changeData > 0 && timerId === null)) {
        return
    }
     timerId = setInterval(() => {
        if (changeData === 0) {
            clearInterval(timerId);
            timerId === null;
        }
      let outTime = convertMs(changeData);
      refs.outputDays.textContent = addLeadingZero(outTime.days);
      refs.outputHours.textContent = addLeadingZero(outTime.hours);
      refs.outputMinutes.textContent = addLeadingZero(outTime.minutes);
      refs.outputSeconds.textContent = addLeadingZero(outTime.seconds);
        changeData-=1000;
    }, 1000);
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
};
function addLeadingZero(value) {
    return `${value}`.padStart(2, 0);
}
