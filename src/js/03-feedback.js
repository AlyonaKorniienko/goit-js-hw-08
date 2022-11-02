import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   inputEmail: document.querySelector('input'),
//   inputMessage: document.querySelector('textarea'),
// };
// const STORAGE_KEY = 'feedback-form-state';
// let formData = { email: '', message: '' };
// // console.log(formData);

// //
// refs.form.addEventListener('submit', onSubmit);
// function onSubmit(evt) {
//   evt.preventDefault();
//   // const formElements = evt.currentTarget.elements;
//   // const email = formElements.email.value;
//   // const message = formElements.message.value;
//   // const formDataToConsole = { email, message };
//   // console.log(formDataToConsole);
//   evt.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// refs.form.addEventListener('input', throttle(onInput, 500));

// function onInput(evt) {
//   // formData[evt.target.name] = evt.target.value;
//   if (evt.target.nodeName === 'INPUT') {
//     formData.email = evt.target.value;
//   } else if (evt.target.nodeName === 'TEXTAREA') {
//     formData.message = evt.target.value;
//   }
//   if (formData) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   }
// }

// console.log(formData);

// function onSavedData() {
//   // const savedData = localStorage.getItem(STORAGE_KEY);
//   // const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   // if (savedData) {
//   //   refs.inputEmail.value = parsedData.email || '';
//   //   refs.inputMessage.value = parsedData.message || '';
//   // }

//   // console.log(formData);
//   let formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   refs.inputEmail.value = formData.email;
//   refs.inputMessage.value = formData.message;
// }
// onSavedData();

// =====
let form = document.querySelector('.feedback-form');
let email = document.querySelector('input');
let message = document.querySelector('textarea');

let data = { email: '', message: '' };
form.addEventListener(
  'input',
  throttle(evt => {
    if (evt.target.nodeName === 'INPUT') {
      data.email = evt.target.value;
    } else if (evt.target.nodeName === 'TEXTAREA') {
      data.message = evt.target.value;
    }
    if (data) {
      localStorage.setItem('feedback-form-state', JSON.stringify(data));
    }
  }, 500)
);
if (localStorage.getItem('feedback-form-state')) {
  data = JSON.parse(localStorage.getItem('feedback-form-state'));
}
email.value = data.email;
message.value = data.message;

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(data);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});
