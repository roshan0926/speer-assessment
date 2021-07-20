import React from 'react';
import "./home.scss"

export default function Home() {
  return (
    <div className="full-home-page">
      <h1 className="first-h1">Hello and welcome to my Speer Technologies front end assessment!</h1>
      <h2 className="home-page-body">While I was creating this app I had not noticed only until I deployed my app to Heroku that I was working on a screen at 67% zoom.
        For this reason, if you are viewing it on a screen around 1200px zoom out to 50% and on a screen of around 1500px zoom out to 67% and if a bit bigger than that around 80% zoom.
        Of course, if I were to be working on production level code I would have the additional time to make it interactive baced on screen sizes.
        I truly hope this does not impact your judgement of my potential and knowledge of coding for Speer Technologies.
      </h2>
      <h1 className="second-h1">Click below to proceed to the main landing page. <a href="https://github.com/roshan0926/speer-assessment" target="_blank">Click Here </a> to be directed to my github.  </h1>
      <a className="home-page-button"href="/hero-section"><li>Thank You</li></a>
    </div>
  );
};