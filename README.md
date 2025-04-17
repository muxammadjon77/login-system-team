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
```javascript
import { login, register, resetPassword, logout } from './auth.js';
import { onAuthStateChanged } from "firebase/auth";
