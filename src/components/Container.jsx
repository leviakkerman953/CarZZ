// src/components/Container.jsx
import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import TogglePanel from './TogglePanel';

const Container = () => (
    <div className="container" id="container">
        <SignUpForm />
        <SignInForm />
        <TogglePanel />
    </div>
);

export default Container;
