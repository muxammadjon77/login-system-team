// forgot-password.js
import { resetPassword } from './auth.js';

const email = document.getElementById('email');
const resetBtn = document.getElementById('reset-password-btn');

resetBtn.addEventListener('click', async () => {
  try {
    await resetPassword(email.value);
    alert("Password reset link sent to your email.");
  } catch (err) {
    alert(err.message);
  }
});
