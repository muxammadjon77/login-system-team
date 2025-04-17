# Login Page UI - `index.html`

This file contains the structure and layout of the login page for the Firebase authentication system.

## Features

- **Responsive Design**: Built using Bootstrap to make the page mobile-friendly and easy to use on various screen sizes.
- **User Input Fields**: Provides input fields for the user to enter their email and password.
- **Login & Register Buttons**: Includes buttons for logging in and redirecting to the registration page.
- **Forgot Password Link**: Provides a link for users who forgot their password, directing them to the `forgot-password.html` page.
- **Welcome Message**: After a successful login, the user's email is displayed, and a logout button appears.
  
## HTML Structure

- **Head Section**:
  - Includes meta tags for charset and viewport to ensure proper scaling on different devices.
  - The title of the page is set to "Firebase Auth".
  - The Bootstrap CSS framework is linked to ensure the page has a clean and responsive layout.

- **Body Section**:
  - **`#user-section`**: This section is initially hidden and will be displayed if the user successfully logs in. It shows the user's email and a logout button.
  - **`#auth-forms`**: This section contains the login form, which includes:
    - An input for the user's email.
    - An input for the user's password.
    - A link to the forgot password page (`forgot-password.html`).
    - Two buttons: one for logging in and another for redirecting to the registration page.

## External Dependencies

- **Bootstrap**: This page uses Bootstrap 5 for styling and responsive design.
  - Bootstrap is linked via a CDN to minimize the need for local installation and ensure the latest version is always used.

## JavaScript

- The `main.js` script is imported to handle the interactivity of the page, including the login and registration actions.

---

This `index.html` file provides the foundational structure for user authentication in the Firebase system. It ensures that users can log in, register, or recover their passwords in a user-friendly manner.

# Firebase Authentication Logic - `auth.js`

This file contains the Firebase authentication functions used to log in, register, reset passwords, and log out users. It interacts with Firebase Authentication and provides these functionalities for the application.

## Functions

### 1. **login(email, password)**
   - **Purpose**: Authenticates the user by email and password.
   - **Parameters**:
     - `email`: The email address of the user.
     - `password`: The password associated with the user's email.
   - **Returns**: A user credential object if login is successful, or throws an error if it fails.
   - **Usage**: This function is called during the login process to validate the user's credentials via Firebase Authentication.

### 2. **register(email, password)**
   - **Purpose**: Registers a new user using email and password.
   - **Parameters**:
     - `email`: The email address to register the user with.
     - `password`: The password for the new account.
   - **Returns**: A user credential object if registration is successful, or throws an error if it fails.
   - **Usage**: This function is used when the user submits their registration details on the registration page.

### 3. **resetPassword(email)**
   - **Purpose**: Sends a password reset email to the user.
   - **Parameters**:
     - `email`: The email address of the user who requested a password reset.
   - **Returns**: An object indicating whether the operation was successful or not.
   - **Usage**: This function is used when the user clicks on the "Forgot Password" link to reset their password.

### 4. **logout()**
   - **Purpose**: Logs out the currently authenticated user.
   - **Returns**: An object indicating whether the logout operation was successful or not.
   - **Usage**: This function is used when the user clicks the logout button after they are logged in.

## Firebase Integration

- **Imports**:
  - The file imports Firebase Authentication methods from the Firebase CDN (`firebase-auth.js`) to handle user authentication.
  - It also imports the Firebase configuration from the `firebase-config.js` file to initialize the `auth` instance.

- **Error Handling**:
  - Each function uses `try-catch` blocks to handle errors gracefully. If an error occurs during any operation (login, register, password reset, logout), the function throws or returns an error message.

## Firebase Authentication SDK

This file is built using Firebase Authentication SDK. It provides four core functions: login, register, reset password, and logout. These are used throughout the application to authenticate and manage users.

---

This `auth.js` file encapsulates the core authentication logic for the Firebase Auth system. It simplifies the process of integrating user authentication into the application by providing reusable functions that interact with Firebase Authentication.

#  Backend Validation for Login System - `main.js`

## File Overview
This is the main entry point for the authentication system, handling user login, registration, password reset, and logout functionality with Firebase backend validation.

## Key Features

### 1. Authentication Flow
- **Login**: Validates user credentials against Firebase Authentication
- **Registration**: Redirects to registration page
- **Password Reset**: Redirects to password recovery page
- **Logout**: Terminates current session

### 2. UI State Management
- Dynamically shows/hides authenticated vs guest UI components
- Displays current user email when logged in

## DOM Elements

| Element ID          | Type       | Purpose                          |
|---------------------|------------|----------------------------------|
| `email`             | Input      | User email input field           |
| `password`          | Input      | User password input field        |
| `login-btn`         | Button     | Triggers login process           |
| `register-btn`      | Button     | Redirects to registration page   |
| `reset-password-btn`| Button     | Redirects to password reset page |
| `logout-btn`        | Button     | Logs out current user            |
| `user-section`      | Div        | Shows when user is authenticated |
| `user-email`        | Span       | Displays authenticated user email|
| `auth-forms`        | Div        | Shows when no user is logged in  |

## Firebase Integration

### Authentication Methods
`javascript`
import { login, register, resetPassword, logout } from './auth.js';
import { onAuthStateChanged } from "firebase/auth";

# Firebase Authentication Setup — `firebase-config.js`

This module connects your app to **Firebase Authentication** using the Firebase JS SDK. It initializes the Firebase app with your project settings and exports the `auth` instance for use across your application.

## 📁 File: `firebase-config.js`

### 🔧 Technologies Used:
- **Firebase JS SDK** (via CDN)
- `initializeApp` — Initializes the Firebase app.
- `getAuth` — Retrieves the Firebase Authentication service.

### 🔐 Firebase Configuration:
`js`
const firebaseConfig = {
  apiKey: "AIzaSyDdSvxjJuTpfdb5jnDozBIj4RpSyRUurZY",
  authDomain: "login-bc50e.firebaseapp.com",
  projectId: "login-bc50e",
  storageBucket: "login-bc50e.firebasestorage.app",
  messagingSenderId: "447546620644",
  appId: "1:447546620644:web:4cf8793caf4dccc8640af1"
};

# 📝 Register User Module — `register.html`

This file is a registration page built using **HTML**, **Bootstrap**, and **JavaScript modules**. It allows users to create a new account by entering their email and password, and is connected to **Firebase Authentication** for user registration.

## 📁 File: `register.html`

### 📌 Purpose:
A user interface for new users to sign up for an account using their email and password.

### 🧰 Technologies Used:
- **HTML5** — For structuring the page.
- **Bootstrap 5** — For responsive styling and layout.
- **CSS** — External stylesheet `style.css` for custom styles.
- **JavaScript (ES Modules)** — Connected through `register.js`.
- **Firebase Authentication** — Handles the registration logic in the backend.

### 📐 Layout Overview:
- A simple centered registration card with:
  - **Email** input
  - **Password** input
  - **Confirm Password** input
  - A **Register** button
  - Link to login page


### 📂 File Structure:

### ⚙️ Functionality (via `register.js`):
- Collects user input for email and password.
- Validates that passwords match.
- Registers the user using Firebase Authentication.
- Displays error messages (in `register.js`) if input is invalid.

### 🔗 Navigation:
If a user already has an account, they can click:
`html`
<a href="index.html">Already have an account? Login</a>
## 🧠 Registration Logic — `register.js`

The `register.js` file handles the logic behind user registration. It listens for a button click, validates the form, and calls a custom `register()` function from `auth.js`, which communicates with Firebase Authentication.

### 🔗 Connected Files:
- `register.html` — The UI for registration.
- `auth.js` — Contains the actual `register(email, password)` function that wraps Firebase’s API.
- `firebase-config.js` — Firebase initialization settings (imported in `auth.js`).

---

### 📋 Main Functionalities:

#### 1. **Input Selection**
Grabs the necessary input elements from the DOM:

`js`
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const registerBtn = document.getElementById('register-btn');

#### 2 **Click Event Listener**
Listens for the "Register" button click:
registerBtn.addEventListener('click', async () => {
  // logic inside
});

#### 3 **Password Matching Validation**
Ensures that the password and confirmation match before proceeding:
if (password.value !== confirmPassword.value) {
  alert("Passwords do not match.");
  return;
}

#### 4 **Call to register() Function**
Calls the Firebase wrapper function from auth.js to register the user:
const userCredential = await register(email.value, password.value);

#### 5 **Handling Registration Result**
Shows success or failure messages and redirects if successful:
if (userCredential) {
  alert("Registration successful! You can now log in.");
  window.location.href = "index.html";
} else {
  alert("Registration failed. Please try again.");
}

#### 6 **Error Handling**
Catches and displays any errors that occur during the registration process:
} catch (err) {
  alert(err.message);
}

## 🔐 Forgot Password Integration — `forgot-password.html`

The `forgot-password.html` file provides a simple and user-friendly interface that allows users to reset their password if they forget it. It collects the user’s email and sends a password reset link using Firebase Authentication.

---

### 📁 File: `forgot-password.html`

This file creates the frontend UI for requesting a password reset link.

---

### 🧩 Key Features:

#### ✅ Responsive Design
Uses Bootstrap 5 for a clean, responsive design that works well across devices.

#### 🔧 Input Field
```html
<input type="email" id="email" class="form-control" placeholder="Enter your email" />
```

#### 🔘 Reset Button
```
<button id="reset-password-btn" class="btn btn-warning">Send Reset Link</button>
```

#### 🔄 Navigation
```
<a href="index.html">Back to Login</a>
```

#### 🔌 JavaScript Integration
```
<script type="module" src="forgot-password.js"></script>
```

## 🔧 Forgot Password Logic — `forgot-password.js`

The `forgot-password.js` file manages the backend logic for the forgot password feature. It listens for the reset button click, takes the user’s email, and calls a custom `resetPassword()` function from `auth.js`, which communicates with Firebase Authentication to send a password reset link.

---

### 🔗 Connected Files:
- `forgot-password.html` — The UI page where users enter their email to request a password reset.
- `auth.js` — Contains the `resetPassword(email)` function, which wraps Firebase’s `sendPasswordResetEmail()` method.
- `firebase-config.js` — Firebase configuration used in the auth module.

---

### 📋 Main Functionalities:

#### 1 **Get Input Elements**
```js
const email = document.getElementById('email');
const resetBtn = document.getElementById('reset-password-btn');
```

#### 2 **Event Listener for Reset**
```
resetBtn.addEventListener('click', async () => {
  // logic inside
});
```

#### 3 **Calling Firebase Reset Logic**
```
await resetPassword(email.value);
```

#### 4 **Success Feedback**
```
alert("Password reset link sent to your email.");
```
