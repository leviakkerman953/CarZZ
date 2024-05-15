
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Register = () => {
  const [activeTab, setActiveTab] = useState();
  const toggleTab = () => {}

  return (
    <div className="container" id="container">
      <Container />

        <div className="container">
        <div className={`form-container ${activeTab === 'sign-in' ? 'sign-in' : 'sign-up'}`}>
            {/* Your form content */}
        </div>
        <div className="toggle-container">
            <div className={`toggle ${activeTab === 'sign-in' ? '' : 'active'}`}>
            <div className={`toggle-panel toggle-left ${activeTab === 'sign-in' ? 'active' : ''}`}>
                {/* Sign In content */}
                <button onClick={toggleTab}>Sign In</button>
            </div>
            <div className={`toggle-panel toggle-right ${activeTab === 'sign-up' ? 'active' : ''}`}>
                {/* Sign Up content */}
                <button onClick={toggleTab}>Sign Up</button>
            </div>
            </div>
        </div>
        </div>
    
    </div>
  );
}

export default Register;

