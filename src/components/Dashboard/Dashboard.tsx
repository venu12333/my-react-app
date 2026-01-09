import React from 'react';
import './Dashboard.css';
import { logoutUser } from '../../api/auth';

interface DashboardProps {
  user: {
    email: string;
    name: string;
  };
  onLogout?: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const handleLogout = () => {
    logoutUser();
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="dashboard-container" data-testid="dashboard-container">
      <header className="dashboard-header" data-testid="dashboard-header">
        <h1 data-testid="dashboard-title">Dashboard</h1>
        <div className="user-info" data-testid="user-info">
          <span data-testid="user-name">Welcome, {user.name}</span>
          <button
            className="logout-button"
            data-testid="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content" data-testid="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome to Your Dashboard</h2>
          <p data-testid="user-email">Logged in as: {user.email}</p>
          <p>You have successfully authenticated!</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card" data-testid="stats-card">
            <h3>Statistics</h3>
            <p>View your account statistics here</p>
          </div>

          <div className="dashboard-card" data-testid="activity-card">
            <h3>Recent Activity</h3>
            <p>Your recent activities will appear here</p>
          </div>

          <div className="dashboard-card" data-testid="settings-card">
            <h3>Quick Settings</h3>
            <p>Manage your account settings</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
