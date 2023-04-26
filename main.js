import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js"
import {
  getMessaging,
  getToken
} from "https://www.gstatic.com/firebasejs/9.19.0/firebase-messaging.js"

const firebaseConfig = {
  apiKey: "AIzaSyCWU7Y7ULIZLuWJANCncbnafnpzsOR26Cs",
  authDomain: "ficha-7-78d68.firebaseapp.com",
  projectId: "ficha-7-78d68",
  storageBucket: "ficha-7-78d68.appspot.com",
  messagingSenderId: "954792486882",
  appId: "1:954792486882:web:86869e4aef223cc5aefbbb"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: "BPuY6FfjJgj18R2uh187syKFegFZHEikq1TDePdTJ2Y9BLfqh5PU6BKMfL116yT47Neat59L5RFpt6smz2GPJKQ" })