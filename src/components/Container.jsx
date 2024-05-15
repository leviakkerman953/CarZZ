// src/components/Container.jsx
import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Container = () => {
  const [isSignUp, setSignUp] = React.useState(false);
  return (
    <div style={{ marginTop: '100px' }}>
      <div >
        {isSignUp ? (
          <SignUpForm onSwitch={() => setSignUp(prev => !prev)} />
        ) : (
          <SignInForm onSwitch={() => setSignUp(prev => !prev)} />
        )}
      </div>
    </div>
  );
}

export default Container;
