import React, { useEffect, useState } from 'react';
import './perks.scss';

export default function Perks() {
  return (<>
    <div className="perks-page">
    <a className="try-it-perks" href="/pricing" data-text="Try it now">Try it now</a>
    <h1 className="perks-title">perks</h1>
    <span className="line one"></span>
    <h2 className="perk-subtitle" id="red">subscription payment model</h2>
    <p className="description" id="desc-one">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
    <span className="line two"></span>
    <h2 className="perk-subtitle" id="blue">no fee cancelation policy</h2>
    <p className="description" id="desc-two">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
    <span className="line three"></span>
    <h2 className="perk-subtitle" id="yellow">subscription payment model</h2>
    <p className="description" id="desc-three">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
    <nav className="hamburger-perks" role="navigation">
          <p className="logo-perks">EXP│CON</p>
        <div id="menuToggle-perks">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu-perks">
            <a href="/home"><li>Home</li></a>
            <a href="/perks"><li>Red</li></a>
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