// src/components/SignUpForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';

const SignUpForm = ({ onSwitch }) => (
    <div className="form-container">
      <form className="sign-in-form">
        <h1>Create Account</h1>
        <SocialIcons />
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="Name" 
          required
          className="form-input"
        />
        <input 
          type="email"
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
        />
        <button 
          type="submit"
          className="form-button"
        >Sign Up</button>
        <button
          onClick={() => onSwitch(prev => !prev)}
          className="form-switch"
        >
          Sign-In
        </button>
      </form>
    </div>
);

export default SignUpForm;
