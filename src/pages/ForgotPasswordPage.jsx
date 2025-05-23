import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    // Dummy send reset link
    setMessage(`Password reset link sent to ${email}`);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        {error && <p className="error-msg">{error}</p>}
        {message && <p className="success-msg">{message}</p>}
        <button type="submit" className="btn-primary">Send Reset Link</button>
      </form>
    </div>
  );
}
