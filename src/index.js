import sendPhoneNumber from './api'
import './styles/styles.sass'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faUserAstronaut, faDownload } from '@fortawesome/free-solid-svg-icons'


library.add(faUserAstronaut)
library.add(faDownload)
dom.watch()


const form = document.querySelector("form");
const input = document.querySelector(".phone-input");


form.addEventListener("submit", formSubmit)

function formSubmit(e){
  e.preventDefault()
  const inputValue = input.value;
  sendPhoneNumber(inputValue)
  input.value = ""
} 



