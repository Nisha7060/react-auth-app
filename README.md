# 🔐 React Login Page with Google, LinkedIn & reCAPTCHA Integration

This is a responsive and user-friendly login page built using **React**. It allows users to log in using:
- 📧 Email and Password
- 🌐 Google OAuth
- 💼 LinkedIn OAuth
- 🧠 Google reCAPTCHA for bot protection

It is designed with accessibility, form validation, and security considerations in mind.

---

## 🚀 Features

- ✅ Email and password login with validation
- 🔐 Google Sign-In using `@react-oauth/google`
- 💼 LinkedIn Sign-In via OAuth 2.0
- 🧠 Google reCAPTCHA v2 validation
- ⚠️ Real-time error handling
- 📱 Responsive and clean UI
- ♿ Accessible form with ARIA attributes

---
## 📂 Project Structure

```bash
src/
│
├── components/
│   └── ProtectedRoute.jsx        # Protects dashboard route from unauthenticated access
│
├── pages/
│   ├── LoginPage.jsx             # Main login component (form + social logins + reCAPTCHA)
│   ├── SignUpPage.jsx            # User registration page
│   ├── OTPPage.jsx               # OTP verification page
│   ├── ForgotPasswordPage.jsx   # Forgot password form
│   ├── ResetPasswordPage.jsx    # New password form
│   └── DashboardPage.jsx        # User dashboard after successful login
│
├── App.js                        # Application routes configuration
├── index.js                      # Main React entry point
├── LoginPage.css                 # Styling for the login page
├── assets/                       # Images, logos, etc.
│   └── logo.png
├── utils/
│   └── validation.js             # Helper functions for form validations
└── README.md                     # Project documentation



🔧 Installation
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/react-auth-page.git
cd react-auth-page
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Environment Configurations
Update the placeholders in LoginPage.jsx with your actual keys:

js
Copy
Edit
const GOOGLE_CLIENT_ID = 'your-google-client-id';
const LINKEDIN_CLIENT_ID = 'your-linkedin-client-id';
const RECAPTCHA_SITE_KEY = 'your-recaptcha-site-key';
Google OAuth Client ID

LinkedIn OAuth App

Google reCAPTCHA Key

▶️ Run the App
bash
Copy
Edit
npm run dev     # If using Vite
# or
npm start       # If using Create React App
🔐 Authentication Flow
Email/Password: User inputs validated and authenticated

Google OAuth: Login using @react-oauth/google

LinkedIn OAuth: Redirect to LinkedIn for authentication

reCAPTCHA: Must be completed to allow login attempt

📘 User Stories
As a user, I can log in using email and password

As a user, I can log in using Google

As a user, I can log in using LinkedIn

As a user, I must complete CAPTCHA verification

As a user, I see helpful validation errors if input is incorrect

📄 License
This project is licensed under the MIT License.

🙋‍♀️ Author
Nisha Yadav
For any queries, feel free to reach out on GitHub or LinkedIn.
