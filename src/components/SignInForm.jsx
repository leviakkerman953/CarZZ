// src/components/SignInForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import apiClient from '../api-client';

const SignInForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onClick = async () => {
    const {data: res} = await apiClient.post("/sign-in", {
      email,
      password
    });

    if (res.success) {
      navigate('/')

    } else {
      alert("Unsuccessful")
    }
  };


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
            <a href="#">Forget Your Password?</a>
            <button
              type="button"
              className="form-button"
              onClick={() => onClick()}
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
