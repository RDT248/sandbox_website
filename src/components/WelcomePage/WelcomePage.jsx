import React from 'react';
import './WelcomePage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="content">
        <div className="icon-wrapper">
          <div className="waving-hand">👋</div>
        </div>
        <h1 className="welcome-title">Welcome!</h1>
        <p className="welcome-message">
          I'm glad to have you here. Explore and enjoy your stay.
        </p>
        <Link to="/about">
          <button className="cta-button">About Me</button>
        </Link>
        {/* <button className="cta-button">Let's Connect!</button> */}
      </div>
    </div>
  );
};

export default WelcomePage;