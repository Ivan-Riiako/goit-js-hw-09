import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formCreatePromises: document.querySelector('form'),
};
refs.formCreatePromises.addEventListener('submit', onClickSub);

function onClickSub(event) {
  event.preventDefault();
  
  const amount = Number(event.currentTarget['amount'].value);;
  const firstDelay = Number(event.currentTarget['delay'].value);
  const step = Number(event.currentTarget['step'].value);

  let realDelay = firstDelay;
  for (let i = 1; i <= amount; i += 1) {
    
    createPromise(i, realDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  realDelay += step;
    
  }
}  
    



   



function createPromise(position, delay) {
  return new Promise((res, rej) => {
  const shouldResolve = Math.random() > 0.3;
  const backend = { position, delay };

    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        res(backend);
      }
      // Reject
      rej(backend);
    }, delay);

  })}
  




  



// //createPromise(amount, delay)
//   // .then(({ position, delay }) => {
//   //   Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   // })
//   // .catch(({ position, delay }) => {
//   //   Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   // });


// const promis = new Promise((res, rej) => {

// // setTimeout(()=>{
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     res({ position: 5, delay: 2000 });
//   } else {
//     // Reject
//     rej({ position: 5, delay: 2000 });
//   }
// // },2000)

// })


  // createPromise(324, 2342)
  //   .then(({ position, delay }) => {
  //     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });