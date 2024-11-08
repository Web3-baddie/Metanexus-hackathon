// Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to ConnectWallet page after login
    navigate('/connect-wallet');
  };

  return (
    <div id="login-window">
      <div id="login-box" className="glassy-dark-bg rounded-custom">
        <div id="logo">
          <img src= "D:\arbitrum\metanexus\src\images\Your paragraph text.png" alt="logo" height="64" />
        </div>
        <h2 id="login-header" className="logo-font">Login</h2>
        <form className="my-3" onSubmit={handleSubmit}>
          <input
            className="input text-pale-light full-opacity-bg rounded-custom"
            name="username"
            id="username"
            autoComplete="username"
            placeholder="Username"
          /><br />
          <input
            className="input text-pale-light full-opacity-bg rounded-custom"
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            placeholder="Password"
          /><br />
          <div className="remember-section">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <input className="submit-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
