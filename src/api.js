import { initializeApp } from  "firebase/app";
import { getFirestore,doc,setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfTcUD08fUlIa1YAU8uzbSP4BWcdCMNIM",
  authDomain: "somemails-a476c.firebaseapp.com",
  projectId: "somemails-a476c",
  storageBucket: "somemails-a476c.appspot.com",
  messagingSenderId: "1097080400693",
  appId: "1:1097080400693:web:bf92867376f43b5cfc3a7c"
};
const app = initializeApp(firebaseConfig)
const store = getFirestore()
const base = doc(store, "formData/3EDYdHZLjmwy4WTHeFbU")


export default function sendPhoneNumber(num){
  setDoc(base, {phoneNumber: num})
  .then(()=>{
    alert("Thanks, your number was send")
  }) 
 .catch(err=>{
    console.log(err)
    alert(err.message + e.name)
  }) 
}
