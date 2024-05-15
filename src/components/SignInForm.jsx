// src/components/SignInForm.jsx
import React from 'react';
import SocialIcons from './SocialIcons';

const SignInForm = () => (
    <div className="form-container sign-in">
        <form>
            <h1>Sign In</h1>
            <SocialIcons />
            <span>or use your email password</span>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
        </form>
    </div>
);

export default SignInForm;
