import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    mfaEnabled: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { email, password, confirmPassword } = form;

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    alert(`Account created for ${email}. MFA: ${form.mfaEnabled ? 'Enabled' : 'Disabled'}`);
    navigate('/login');
  };

  const handleLinkedInLogin = () => {
    alert('Redirecting to LinkedIn SSO...');
    // Placeholder for LinkedIn SSO logic
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          minLength={6}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="mfaEnabled"
            checked={form.mfaEnabled}
            onChange={handleChange}
          />
          Enable Multi-Factor Authentication (MFA)
        </label>

        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>

      <div className="social-login">
        <span className="social-label">or sign up with</span>
        <button type="button" onClick={handleLinkedInLogin} className="btn-linkedin">
          <FaLinkedin className="linkedin-icon" />
          Sign Up with LinkedIn
        </button>
      </div>

      <div className="extra-links">
        Already have an account? <Link to="/login">Login</Link><br />
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
}
