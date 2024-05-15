// src/components/SignUpForm.jsx
import React, { useEffect, useRef, useState } from 'react';
import SocialIcons from './SocialIcons';
import apiClient from '../api-client';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClick = () => {
    apiClient.post("/sign-up", {
      name,
      email,
      password
    });
    navigate('/');
  }
  return (
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Email"
          required
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
}

export default SignUpForm;
