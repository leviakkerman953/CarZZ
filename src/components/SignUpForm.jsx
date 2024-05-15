// src/components/SignUpForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';

const SignUpForm = () => (
    <div className="form-container sign-up">
        <form>
            <h1>Create Account</h1>
            <SocialIcons />
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </form>
    </div>
);

export default SignUpForm;
