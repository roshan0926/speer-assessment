import React, { useEffect, useState } from 'react';
import './getExpCon.scss';

export default function GetExpCon() {
  return (<>
    <div className="getExpCon-page">
      <a className="try-it-getExpCon" href="/pricing" data-text="Try it now">Try it now</a>
      <h1 className="GetExpCon-title">get exp│con now</h1>
      <p className="GetExpCon-subtitle">purchase and download the app</p>
      <nav className="hamburger-getExpCon" role="navigation">
        <p className="logo-getExpCon">EXP│CON</p>
        <div id="menuToggle-getExpCon">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu-getExpCon">
            <a href="/hero-section"><li>What is it</li></a>
            <a href="/hero-section#perks"><li>perks</li></a>
            <a href="/pricing"><li>pricing</li></a>
          </ul>
        </div>
      </nav>
    </div>
  </>
  );
};