import { auth } from './firebase-config.js';
import { login, register, resetPassword, logout } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const resetBtn = document.getElementById("reset-password-btn");
const logoutb = document.getElementById("logoutb");
const userSection = document.getElementById("user-section");
const userEmail = document.getElementById("user-email");
const authForms = document.getElementById("auth-forms");

loginBtn.addEventListener("click", async () => {
  try {
    await login(emailInput.value, passwordInput.value);
    userSection.style.display = "block";
    authForms.style.display = "none";
    userEmail.textContent = emailInput.value;
  } catch (err) {
    alert(err.message);
  }
});

registerBtn.addEventListener("click", () => {
  window.location.href = "register.html";
});

logoutb.addEventListener("click", async () => {
  console.log("Logout tugmasi bosildi");
  try {
    await logout();
    userSection.style.display = "none";
    authForms.style.display = "block";
  } catch (err) {
    alert(err.message);
  }
});

resetBtn.addEventListener("click",  () => {
  window.location.href = "forgot-password.html";
});



onAuthStateChanged(auth, (user) => {
  if (user) {
    userSection.style.display = "block";
    authForms.style.display = "none";
    userEmail.textContent = user.email;
  } else {
    userSection.style.display = "none";
    authForms.style.display = "block";
  }
});
