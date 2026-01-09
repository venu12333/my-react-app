import React, { useState } from 'react';
import './Login.css';
import { authenticateUser } from '../../api/auth';
import { validateEmail, validatePassword } from '../../utils/validation';

interface LoginProps {
  onLoginSuccess?: (user: { email: string; name: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !password) {
      setError('Please fill in all required fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const result = await authenticateUser(email, password, rememberMe);
      
      if (result.success) {
        // Store session data
        if (rememberMe) {
          localStorage.setItem('authToken', result.token);
          localStorage.setItem('userEmail', email);
        } else {
          sessionStorage.setItem('authToken', result.token);
          sessionStorage.setItem('userEmail', email);
        }

        // Call success callback
        if (onLoginSuccess) {
          onLoginSuccess(result.user);
        }
      } else {
        setError(result.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password page
    window.location.href = '/forgot-password';
  };

  const handleSignUp = () => {
    // Navigate to sign up page
    window.location.href = '/signup';
  };

  return (
    <div className="login-container" data-testid="login-container">
      <div className="login-card">
        <h1 className="login-title" data-testid="login-title">Welcome Back</h1>
        <p className="login-subtitle" data-testid="login-subtitle">
          Sign in to your account
        </p>

        {error && (
          <div className="error-message" data-testid="error-message" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} data-testid="login-form">
          <div className="form-group">
            <label htmlFor="email" data-testid="email-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              data-testid="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={isLoading}
              autoComplete="email"
              aria-required="true"
              aria-invalid={error.includes('email') ? 'true' : 'false'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" data-testid="password-label">
              Password *
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                data-testid="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={isLoading}
                autoComplete="current-password"
                aria-required="true"
                aria-invalid={error.includes('password') ? 'true' : 'false'}
              />
              <button
                type="button"
                className="toggle-password"
                data-testid="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label" data-testid="remember-me-label">
              <input
                type="checkbox"
                data-testid="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={isLoading}
              />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className="link-button"
              data-testid="forgot-password-link"
              onClick={handleForgotPassword}
              disabled={isLoading}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="submit-button"
            data-testid="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span data-testid="loading-spinner">Signing in...</span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="signup-section" data-testid="signup-section">
          <p>
            Don't have an account?{' '}
            <button
              type="button"
              className="link-button"
              data-testid="signup-link"
              onClick={handleSignUp}
              disabled={isLoading}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
