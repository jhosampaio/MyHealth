
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyBKWBALJ2kcO5dLjcIPeskIbjbEE33ri74",
  authDomain: "my-heath-35509.firebaseapp.com",
  projectId: "my-heath-35509",
  storageBucket: "my-heath-35509.appspot.com",
  messagingSenderId: "694822260317",
  appId: "1:694822260317:web:cae37a7774fd950ccc47b4",
  measurementId: "G-62RGGHVBN3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}