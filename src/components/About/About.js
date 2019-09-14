import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LoadingBars from '../LoadingBars/LoadingBars';
import profilePic from '../../images/prof-pic.png';
import logo from '../../images/KM-logo.svg';
import github from '../../images/github-logo.svg';
import linkedin from '../../images/linkedin-logo.svg';
import resume from '../../images/text-document.svg';
import email from '../../images/email.svg';
import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  routeHome = () => {
    const { history } = this.props;

    history.push('/');
  };

  handleLoad = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="about-container">
        {loading && <LoadingBars />}
        <header className="about-header-container">
          <img
            className="logo"
            src={logo}
            alt="home logo"
            onClick={this.routeHome}
          />
          <div className="about-links-container">
            <NavLink className="about-link link-1" to="/">
              Home
            </NavLink>
            <NavLink className="about-link link-2" to="/projects">
              Projects
            </NavLink>
          </div>
        </header>
        <main className="main-about-container">
          <img
            className="profile-pic"
            src={profilePic}
            alt="profile"
            onLoad={this.handleLoad}
          />
          <div>
            <h1 className="about-header">About Me</h1>
            <p className="about-content">
              I am a software developer with a strong desire for overcoming
              challenging obstacles, much like the ones that often come up
              within the world of software development. My background in life
              sciences and sales has given me both the critical thinking skills
              needed to effectively solve problems as well as the communication
              skills to efficiently work cross-functionally with team members
              towards accomplishing a common goal.
            </p>
            <p className="about-content">
              In software development, you must be willing to continuously learn
              to stay relevant. The inevitable truth that there will always more
              to learn has drawn me to development and I believe that my
              willingness and passion to learn on a daily basis has helped me
              immensely in beginning my journey towards becoming a successful
              developer. I welcome learning about new practices and technologies
              and look forward to the next challenge that comes my way.
            </p>
            <p className="about-content">
              Please feel free to connect with me using any of the links below.
              I seek value in every new connection I make and every conversation
              I have:
            </p>
            <p className="about-content">
              <em className="about-quote">
                "Everyone you will ever meet knows something you don't."
                <span className="quote-author"> - Bill Nye</span>
              </em>
            </p>
          </div>
        </main>
        <footer className="about-footer">
          <a
            className="footer-link"
            href="https://drive.google.com/file/d/1-Z6v4vB2mI2GYOMaydyFJrciCbEcoMKP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="resume-icon" src={resume} alt="resume" />
            <p className="footer-link-text">Resume</p>
          </a>
          <a
            className="footer-link"
            href="https://github.com/kmiller9393"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-icon" src={github} alt="github" />
            <p className="footer-link-text">GitHub</p>
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/kurtmiller3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin-icon" src={linkedin} alt="linkedin" />
            <p className="footer-link-text">LinkedIn</p>
          </a>
          <a
            className="footer-link"
            href="mailto:kmiller9393@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="email-icon" src={email} alt="email" />
            <p className="footer-link-text">Email</p>
          </a>
        </footer>
      </div>
    );
  }
}

export default withRouter(About);
