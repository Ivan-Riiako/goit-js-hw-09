import { Notify } from 'notiflix/build/notiflix-notify-aio';
  // Notify.failure('Qui timide rogat docet negare');
  // Notify.success('Sol lucet omnibus');

const refs = {
  formCreatePromises: document.querySelector('form'),
  inputDelay: document.querySelector('input.delay'),
  inputStep: document.querySelector('input.step'),
  inputAmount: document.querySelector('input.amount'),
};



refs.formCreatePromises.addEventListener('submit', submit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
     Notify.success(`✅ Fulfilled promise ${1} in ${1}ms`);
  } else {
    // Reject
  Notify.failure(`❌ Rejected promise ${1} in ${1}ms`);
  }
}

function submit(event) {
  event.preventDefault();
  const delay = event.currentTarget['delay'].value;
  const step = event.currentTarget['step'].value;
  const amount = event.currentTarget['amount'].value;

  setTimeout(interval(amount, step), delay);
}

function interval(amount, step) {
  let starCounter = 1;
  const timerId = setInterval(() => {
    if (starCounter > amount) {
      clearInterval(timerId);
      return;
    }
createPromise(starCounter, step);
    starCounter += 1;
  }, step);
}
