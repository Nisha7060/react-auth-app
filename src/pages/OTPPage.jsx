import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTPPage() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy OTP: 123456
  const validOtp = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (otp === validOtp) {
      navigate('/dashboard');
    } else {
      setError('Incorrect OTP, please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          maxLength="6"
          placeholder="6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          pattern="\d{6}"
          inputMode="numeric"
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="btn-primary">Verify OTP</button>
      </form>
      <p>
        Didn't receive OTP? <button className="link-btn" onClick={() => alert('OTP resent!')}>Resend</button>
      </p>
    </div>
  );
}
