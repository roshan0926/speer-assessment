import React, { useEffect, useState } from 'react';
import './red.scss';
import speakers from './speakers.png';

// import '../HeroSection/heroSection.scss'

export default function Red() {

  return (<>
    <div className="red-page">
      <a className="button-red try-red" href="/pricing" data-text="Try it now">Try it now</a>
      <a className="button-red demo-red" data-text="See Demo">See Demo</a>
      <p className="red-click" data-text="Click">Click</p>
      <h1 className="red-title">Superior Sound</h1>
      <p className="red-text">Experience live version of your favorite songs.</p>
      <img className="speakers" src={speakers} alt="speakers" />
      <nav className="hamburger-red" role="navigation">
        <p className="logo-red">EXP│CON</p>
        <div id="menuToggle-red">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu-red">
            <a href="/home"><li>Home</li></a>
            <a href="/red"><li>Red</li></a>
            <a href="/perks"><li>Perks</li></a>
            <a href="/reviews"><li>Reviews</li></a>
            <a href="/yellow"><li>Yellow</li></a>
          </ul>
        </div>
      </nav>
    </div>

  </>
  );
};