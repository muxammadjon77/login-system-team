// register.js
import { register } from './auth.js';

const email = document.getElementById('email');
const password = document.getElementById('password');
const registerBtn = document.getElementById('register-btn');
const confirmPassword = document.getElementById('confirm-password');

registerBtn.addEventListener('click', async () => {
  try {
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match.");
      return;
    }
    
    const userCredential = await register(email.value, password.value);
    if (userCredential) {
      alert("Registration successful! You can now log in.");
      window.location.href = "index.html";
    } else {
      alert("Registration failed. Please try again.");
  }
  } catch (err) {
    alert(err.message);
  }
});
