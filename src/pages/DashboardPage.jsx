import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>You are successfully logged in.</p>
      <button onClick={handleLogout} className="btn-logout">Logout</button>
    </div>
  );
}
