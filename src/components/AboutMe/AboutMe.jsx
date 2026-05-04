// src/pages/AboutMe.jsx
import React from 'react';
import './AboutMe.css'; // We'll create this next
import logo from '../../logo.svg';

const base_URL = process.env.PUBLIC_URL;
const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      
      <div className="about-content">
        <div className="profile-section">
          <img 
            src={logo} 
            alt="Profile" 
            className="profile-image"
          />
          <h2>Dhruv R</h2>
          <p className="title">Web Developer in Training</p>
        </div>

        <div className="bio-section">
          <h3>My Journey</h3>
          <p>
            Hello! I'm learning web development and currently exploring React 
            with GitHub Pages. This is my learning playground where I build 
            and experiment with new concepts.
          </p>
          
          <h3>Skills I'm Learning</h3>
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Git & GitHub Pages</li>
          </ul>
          
          <h3>My Goals</h3>
          <p>
            I want to build interactive web applications and eventually 
            create full-stack projects. Right now, I'm focusing on mastering 
            React and static site capabilities.
          </p>
          
          <h3>Fun Facts</h3>
          <ul className="fun-facts">
            <li>🌱 Currently learning: React Router and API integration</li>
            <li>🎯 2026 goal: Deploy my first dynamic web app</li>
            <li>💡 I believe in learning by building</li>
          </ul>
        </div>
      </div>
      
      <button onClick={() => window.location.href = base_URL} className="back-button">
        ← Back to Home
      </button>
    </div>
  );
};

export default AboutMe;