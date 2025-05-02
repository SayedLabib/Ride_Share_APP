import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }

    // Simulate registration API request
    setTimeout(() => {
      // Mock successful registration
      setIsLoading(false);
      
      // Redirect to login page with success message
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container card">
        <h2 className="auth-title">Create an Account</h2>
        
        {error && (
          <div className="auth-error">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}
        
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              <i className="fas fa-user"></i> Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Create a password"
              minLength="6"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              <i className="fas fa-lock"></i> Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              placeholder="Confirm your password"
              minLength="6"
              required
            />
          </div>
          
          <div className="terms">
            By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-block" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Creating Account...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <div className="social-login">
          <button className="btn btn-social btn-google">
            <i className="fab fa-google"></i> Continue with Google
          </button>
          <button className="btn btn-social btn-facebook">
            <i className="fab fa-facebook-f"></i> Continue with Facebook
          </button>
        </div>
        
        <div className="auth-footer">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register; 