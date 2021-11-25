import sendPhoneNumber from './api'
import './styles/styles.sass'
import '@fortawesome/fontawesome-free/js/all'
const form = document.querySelector("form");
const input = document.querySelector(".phone-input");


form.addEventListener("submit", formSubmit)

function formSubmit(e){
  e.preventDefault()
  const inputValue = input.value;
  sendPhoneNumber(inputValue)
  input.value = ""
} 


