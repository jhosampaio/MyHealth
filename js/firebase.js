
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKWBALJ2kcO5dLjcIPeskIbjbEE33ri74",
  authDomain: "my-heath-35509.firebaseapp.com",
  projectId: "my-heath-35509",
  storageBucket: "my-heath-35509.appspot.com",
  messagingSenderId: "694822260317",
  appId: "1:694822260317:web:cae37a7774fd950ccc47b4",
  measurementId: "G-62RGGHVBN3"
};

const app = initializeApp(firebaseConfig); // REFERENCIA AO PROJETO DO FIREBASE
const auth = getAuth(app); // REFERENCIA AO MODULO DE AUTENTICACAO DO APP FIREBASE
const db = initializeFirestore(app, {experimentalForceLongPolling: true})
const storage = getStorage(app)

export {app, auth, db, storage}