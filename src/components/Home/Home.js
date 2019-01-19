import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <h1 className="home-header">KURT MILLER</h1>
        <p className="home-position-tag">Software Developer</p>
        <div className="link-list">
          <NavLink className="homepage-link" to="/about">
            About
          </NavLink>
          <NavLink className="homepage-link" to="/projects">
            Projects
          </NavLink>
        </div>
      </div>
    );
  }
}
