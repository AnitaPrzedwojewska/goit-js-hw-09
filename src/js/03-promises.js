import Notiflix from 'notiflix';

const form = document.querySelector(".form");
const delay = form.querySelector("[name='delay']");
// firstDelay.setAttribute("entered", "N");
const step = form.querySelector("[name='step']");
// delayStep.setAttribute('entered', 'N');
const amount = form.querySelector("[name='amount']");
// amount.setAttribute('entered', 'N');

let formValues = {};

const submitButton = form.querySelector("[type='submit']");
// submitButton.disabled = true;

form.addEventListener('input', (event) => {
  if (event.target.value <= 0) {
    Notiflix.Notify.warning('Please enter a number greater than 0');
  }
  // submitButton.disabled = (firstDelay.value > 0) && (delayStep.value > 0) && (amount.value > 0);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = form.delay.value;
  const step = form.step.value;
  const amount = form.amount.value;
  let i = 1;
  createPromise(i, delay)
    .then(({ i, delay }) =>
      Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`)
    )
    .catch(({ i, delay }) =>
      Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`)
  );
  i++;
  while (i <= amount) {
    // console.log(`Promise ${i}`);
    setTimeout(createPromise(i, delay)
      .then(({ i, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`))
      .catch(({ i, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`)), step);
    i++;
  };
});
// console.log(formValues);


// submitButton.addEventListener('click', () => { })

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)
  })
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     const message = `✅ Fulfilled promise ${position} in ${delay}ms`;
//     console.log(message);
//     Notiflix.Notify.success(message);
//   })
//   .catch(({ position, delay }) => {
//     const message = `❌ Rejected promise ${position} in ${delay}ms`;
//     console.log(message);
//     Notiflix.Notify.failure(message);
//   });

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value))
//   .catch(error => console.log(error));