import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaLinkedin } from 'react-icons/fa';
import './LoginPage.css';

const GOOGLE_CLIENT_ID = '130566134711-5nbuquvm4u9ojg3fri38jih8odb6l0ep.apps.googleusercontent.com';
const LINKEDIN_CLIENT_ID = 'YOUR_LINKEDIN_CLIENT_ID';
const RECAPTCHA_SITE_KEY = '6LdICEcrAAAAABdjeDSdS5t52DwoUtbBVM-SvMlk';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(null); // null means not completed
  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email.trim())) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!captcha) {
      newErrors.captcha = 'Please complete the CAPTCHA';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Dummy login logic
    if (email.trim() === 'nisha971943@gmail.com' && password === '123456') {
      localStorage.setItem('authToken', 'dummy-token');
      navigate('/otp');
    } else {
      setErrors({ form: 'Invalid email or password' });
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    navigate('/dashboard');
  };

  const handleGoogleError = () => {
    setErrors({ form: 'Google login failed' });
  };

  const linkedInRedirectUri = `${window.location.origin}/linkedin`;
  const linkedInScope = 'r_liteprofile r_emailaddress';
  const linkedInAuthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    linkedInRedirectUri
  )}&scope=${encodeURIComponent(linkedInScope)}`;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="auth-container" aria-live="polite">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="auth-form" noValidate>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p className="error-msg" id="email-error" role="alert">
              {errors.email}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p className="error-msg" id="password-error" role="alert">
              {errors.password}
            </p>
          )}

          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={(token) => {
              setCaptcha(token);
              setErrors((prev) => ({ ...prev, captcha: undefined }));
            }}
            onExpired={() => {
              setCaptcha(null);
              setErrors((prev) => ({ ...prev, captcha: 'Please complete the CAPTCHA again' }));
            }}
          />
          {errors.captcha && (
            <p className="error-msg" role="alert">
              {errors.captcha}
            </p>
          )}

          {errors.form && (
            <p className="error-msg" role="alert" style={{ marginTop: '10px', fontWeight: '700' }}>
              {errors.form}
            </p>
          )}

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <div className="social-login" id="social-login-section">
          <label className="social-label" htmlFor="social-login-section">
            Or sign in with:
          </label>
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />

          <a
            href={linkedInAuthUrl}
            className="btn-linkedin"
            aria-label="Sign in with LinkedIn"
          >
            <FaLinkedin className="linkedin-icon" aria-hidden="true" />
            Sign in with LinkedIn
          </a>
        </div>

        <div className="extra-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <p>
            New here? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
