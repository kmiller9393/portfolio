import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import LoadingBars from '../LoadingBars/LoadingBars';
import logo from '../../images/KM-logo.svg';
import github from '../../images/github-logo.svg';
import orbital from '../../images/orbital.svg';
import murrayTracker from '../../images/murray-tracker-home.svg';
import swapibox from '../../images/swapibox-home.svg';
import blog from '../../images/kt-blog-landing.svg';
import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      firstView: false,
      secondView: false,
      thirdView: false,
      fourthView: false,
      loading: true
    };
  }

  routeHome = () => {
    const { history } = this.props;

    history.push('/');
  };

  toggleDetailView = e => {
    const { name, classList } = e.target;

    if (!this.state[name]) classList.add('active-button');
    else classList.remove('active-button');

    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  };

  handleLoad = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    const {
      firstView,
      secondView,
      thirdView,
      fourthView,
      loading
    } = this.state;

    return (
      <div className="projects-container">
        {loading && <LoadingBars />}
        <header className="projects-header-container">
          <img
            className="logo"
            src={logo}
            alt="home logo"
            onClick={this.routeHome}
          />
          <div className="projects-link-container">
            <NavLink className="projects-link link-1" to="/">
              Home
            </NavLink>
            <NavLink className="projects-link link-2" to="/about">
              About
            </NavLink>
          </div>
        </header>
        <main className="main-projects-container">
          <h1 className="projects-main-header">Projects</h1>
          <section className="project-container">
            <h2 className="project-header">kt-blog</h2>
            <img
              className="project-image"
              src={blog}
              alt="kt-blog"
              name="firstImage"
            />
            <div className="button-launch-container">
              <button
                className="details-button"
                onClick={e => this.toggleDetailView(e)}
                name="firstView"
              >
                {!firstView ? 'More Details' : 'Hide Details'}
              </button>
              <a
                className="launch-link"
                href="https://pedantic-goldstine-406ed0.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
              <a
                href="https://github.com/kmiller9393/kt-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-logo" src={github} alt="github" />
              </a>
            </div>
            {firstView && (
              <article className="description-container">
                <h3 className="description-header">Description</h3>
                <p className="project-description">
                  kt-blog is a web application that utilizes data fetched from a
                  GraphQL endpoint to display blog posts filtered by category
                  (travel, food and lifestyle). This application also allows
                  visitors to email the blog owner directly with feedback or a
                  message as well as subscribe to receive notifications about
                  new posts.
                </p>
                <h3 className="description-header">Tech Stack</h3>
                <p className="tech-stack-text">
                  React.js, React Static, GraphQL, GraphCMS and Express.js
                </p>
              </article>
            )}
          </section>
          <section className="project-container">
            <h2 className="project-header">Orbital</h2>
            <img
              className="project-image"
              src={orbital}
              alt="orbital"
              name="secondImage"
              onLoad={this.handleLoad}
            />
            <div className="button-launch-container">
              <button
                className="details-button"
                onClick={e => this.toggleDetailView(e)}
                name="firstView"
              >
                {!secondView ? 'More Details' : 'Hide Details'}
              </button>
              <a
                className="launch-link"
                href="https://orbital-app.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
              <a
                href="https://github.com/kmiller9393/orbital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-logo" src={github} alt="github" />
              </a>
            </div>
            {secondView && (
              <article className="description-container">
                <h3 className="description-header">Description</h3>
                <p className="project-description">
                  Orbital is a mobile application that gives users an easy and
                  appealing way to learn more about the universe. There is a
                  Review section, where users can review flashcards and read
                  more about different space topics, a Trivia section, where
                  users can put their space knowledge to the test and a Current
                  Events section, where users can stay up-to-date with space
                  events and continue to expand their space knowledge thanks to
                  NASA's Astronomy Picture of the Day API.
                </p>
                <h3 className="description-header">Tech Stack</h3>
                <p className="tech-stack-text">
                  React.js, Redux, React Router, Jest, Enzyme
                </p>
              </article>
            )}
          </section>
          <section className="project-container">
            <h2 className="project-header">SWAPI-Box</h2>
            <img
              className="project-image"
              src={swapibox}
              alt="star wars api"
              name="secondImage"
            />
            <div className="button-launch-container">
              <button
                className="details-button"
                onClick={e => this.toggleDetailView(e)}
                name="secondView"
              >
                {!thirdView ? 'More Details' : 'Hide Details'}
              </button>
              <a
                className="launch-link"
                href="https://star-wars-api-km.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
              </a>
              <a
                href="https://github.com/kmiller9393/swapibox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-logo" src={github} alt="github" />
              </a>
            </div>
            {thirdView && (
              <article className="description-container">
                <h3 className="description-header">Description</h3>
                <p className="project-description">
                  SWAPI-Box is a web application that utilizes the SWAPI (Star
                  Wars API) to display information about various people, planets
                  and vehicles found in a galaxy far, far away. Users can view
                  and add these people, planets and vehicles to their favorites
                  as well. This application leverages asynchronous JavaScript
                  and ES6 to efficiently fetch and display Star Wars data found
                  within nested fetch calls for a beautifully interactive User
                  Experience.
                </p>
                <h3 className="description-header">Tech Stack</h3>
                <p className="tech-stack-text">
                  React.js, React Router, Jest, Enzyme
                </p>
              </article>
            )}
          </section>
          <section className="project-container">
            <h2 className="project-header">MurrayTracker</h2>
            <img
              className="project-image"
              src={murrayTracker}
              alt="movie tracker"
              name="fourthImage"
            />
            <div className="button-launch-container">
              <button
                className="details-button"
                onClick={e => this.toggleDetailView(e)}
                name="fourthView"
              >
                {!fourthView ? 'More Details' : 'Hide Details'}
              </button>
              <a
                href="https://github.com/kmiller9393/movie-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="github-logo" src={github} alt="github" />
              </a>
            </div>
            {fourthView && (
              <article className="description-container">
                <h3 className="description-header">Description</h3>
                <p className="project-description">
                  MurrayTracker is an application that uses The Movie Database
                  API to give the user access to a variety of Bill Murray movies
                  as well as the ability to login and add specific titles of
                  their choice to their favorites. If a user clicks on a
                  particular movie card, they can view a synposis of that movie,
                  its release date and its IMDb rating.
                </p>
                <h3 className="description-header">Tech Stack</h3>
                <p className="tech-stack-text">
                  React.js, Redux, React Router, Express, PostgreSQL, Jest,
                  Enyzme
                </p>
              </article>
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default withRouter(Projects);
