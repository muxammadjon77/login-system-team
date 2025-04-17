# `index.html` - Login Page UI

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

# `auth.js` - Firebase Authentication Logic

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

# main.js - Backend Validation for Login System

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

### 🖼️ UI Screenshot (optional):
> *(You can add a screenshot here if needed)*

### 📂 File Structure:

### ⚙️ Functionality (via `register.js`):
- Collects user input for email and password.
- Validates that passwords match.
- Registers the user using Firebase Authentication.
- Displays error messages (in `register.js`) if input is invalid.

### 🔗 Navigation:
If a user already has an account, they can click:
```html
<a href="index.html">Already have an account? Login</a>
