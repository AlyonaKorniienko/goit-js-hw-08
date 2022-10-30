import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  inputEmail: document.querySelector("input"),
  inputMessage: document.querySelector("textarea"),
};
const STORAGE_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener("submit", onSubmit);
refs.form.addEventListener("input", throttle(onInput, 500));

function onSubmit(evt) {
  evt.preventDefault();
  const formElements = evt.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  const formDataToConsole = { email, message };
  console.log(formDataToConsole);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onSavedData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (savedData) {
    refs.inputEmail.value = parsedData.email;
    refs.inputMessage.value = parsedData.message;
  }
}
onSavedData();

function onInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
