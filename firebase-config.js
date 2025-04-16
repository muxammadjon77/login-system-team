import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdSvxjJuTpfdb5jnDozBIj4RpSyRUurZY",
  authDomain: "login-bc50e.firebaseapp.com",
  projectId: "login-bc50e",
  storageBucket: "login-bc50e.firebasestorage.app",
  messagingSenderId: "447546620644",
  appId: "1:447546620644:web:4cf8793caf4dccc8640af1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
