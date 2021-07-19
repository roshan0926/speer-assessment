import React, { useEffect, useState } from 'react';
import './yellow.scss';
import cup from './cup.jpeg';
import cloud from './cloud.jpeg';
import overlay from './overlay.png';




export default function Yellow() {
  return (<>
    <div className="yellow-page">
    <a className="button-yellow try-yellow" href="/pricing" data-text="Try it now">Try it now</a>
    <a className="button-yellow demo-yellow" data-text="See Demo">See Demo</a>
    <h1 className="yellow-title">Front row seats</h1>
    <p className="yellow-text">Experience concerts upclose and personal</p>
    <div className="photo-cover">
    <div className="top-foreground">
    <img className="overlay" src={overlay} alt="overlay"/>
    <img className="cup" src={cup} alt="cup"/>
    </div>
    </div>
    <img className="cloud" src={cloud} alt="cloud"/>
    <div className="bottom-foreground"></div>
      <nav className="hamburger-yellow" role="navigation">
        <p className="logo-yellow">EXP|CON</p>
        <div id="menuToggle-yellow">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu-yellow">
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