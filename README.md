# 🔐 React Authentication Login Page

This project is a responsive and accessible React-based login page that supports:
- Email & Password authentication with form validation
- Google OAuth Login
- LinkedIn OAuth Login
- Google reCAPTCHA for bot protection

## 🚀 Features

- 🔒 Secure login with form validation
- 🌐 Social login (Google, LinkedIn)
- 🤖 Google reCAPTCHA integration
- ⚠️ Real-time error messages
- 💅 Modern UI with accessibility support

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   └── ProtectedRoute.jsx        # Component to protect dashboard route if user is not authenticated
│
├── pages/
│   ├── LoginPage.jsx             # Login component (email/password, Google, LinkedIn, reCAPTCHA)
│   ├── SignUpPage.jsx            # User registration page
│   ├── OTPPage.jsx               # OTP verification page
│   ├── ForgotPasswordPage.jsx   # Forgot password form
│   ├── ResetPasswordPage.jsx    # Page for entering new password
│   └── DashboardPage.jsx        # User dashboard after login
│
├── App.js                        # Routing setup for all pages using React Router
├── index.js                      # Main React entry file rendering <App />
├── LoginPage.css                 # Styling specific to LoginPage component
├── assets/                       # (Optional) Images, logos, etc.
│   └── logo.png                  # Example logo image
├── utils/                        # (Optional) Utilities and helpers
│   └── validation.js             # Functions for form validation
└── README.md                     # Project documentation






🔧 Installation
Clone the Repository

bash
Copy
Edit
git clone https://github.com/your-username/react-auth-page.git
cd react-auth-page
Install Dependencies

bash
Copy
Edit
npm install
Add Environment Configurations

Replace the placeholder keys in LoginPage.jsx:

js
Copy
Edit
const GOOGLE_CLIENT_ID = 'your-google-client-id';
const LINKEDIN_CLIENT_ID = 'your-linkedin-client-id';
const RECAPTCHA_SITE_KEY = 'your-recaptcha-site-key';
Google OAuth: Get your client ID

LinkedIn OAuth: Create an app

reCAPTCHA: Generate a key

▶️ Run the App
bash
Copy
Edit
npm run dev    # If using Vite
# or
npm start      # If using Create React App
🔐 Authentication Flow
Email/Password: Basic input validation & login

Google Login: Using @react-oauth/google

LinkedIn Login: Using LinkedIn OAuth 2.0 URL redirection

reCAPTCHA: Must be completed to enable login



📘 User Stories
Login with email and password

Login using Google OAuth

Login using LinkedIn OAuth

CAPTCHA verification before login

Form validation with helpful error messages

📄 License
This project is licensed under the MIT License.

🙋‍♀️ Author
Nisha Yadav
