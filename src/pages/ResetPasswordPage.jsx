import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!form.password || !form.confirmPassword) {
      setError('Fill both fields');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (form.password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    // Dummy token validation
    if (token !== 'valid-token') {
      setError('Invalid or expired reset token');
      return;
    }

    setMessage('Password reset successful! Redirecting to login...');
    setTimeout(() => navigate('/login'), 3000);
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="password"
          name="password"
          placeholder="New password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
          autoFocus
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm new password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          minLength={6}
        />
        {error && <p className="error-msg">{error}</p>}
        {message && <p className="success-msg">{message}</p>}
        <button type="submit" className="btn-primary">Reset Password</button>
      </form>
    </div>
  );
}
