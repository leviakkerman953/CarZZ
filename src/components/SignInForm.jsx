// src/components/SignInForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';

const SignInForm = ({ onSwitch }) => {
  return (
    <div className="form-container sign-in" >
        <form className="sign-in-form">
            <h1>Sign In</h1>
            <SocialIcons />
            <span>or use your email password</span>
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
            <a href="#">Forget Your Password?</a>
            <button
              type="submit"
              className="form-button"
            >Sign In</button>
            <button
              onClick={() => onSwitch()}
              className="form-switch"
            >
              Sign-Up
            </button>
        </form>
    </div>
  );
}

export default SignInForm;
