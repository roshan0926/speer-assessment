import React, { useEffect, useState } from 'react';
import './reviews.scss';
import speakers from './review-speaker.png';

export default function Reviews() {
  return (<>
    <div className="reviews-page">
      <a className="try-it-reviews" href="/pricing" data-text="Try it now">Try it now</a>
      <img className="review-speakers" src={speakers} alt="review-speakers" />
      <div>
        <h1 className="review-title">reviews</h1>
        <p className="stars" id="star-one">★★★★★</p>
        <p className="review-subtitle" id="subtitle-review-one">artist</p>
        <p className="review-text" id="review-one">"Love it, it's the Best. I can't live without it!"</p>
        <p className="stars" id="star-two">★★★★★</p>
        <p className="review-subtitle" id="subtitle-review-two">producer</p>
        <p className="review-text" id="review-two">"Love it, it's the Best. I can't live without it!"</p>
        <p className="stars" id="star-three">★★★★★</p>
        <p className="review-subtitle" id="subtitle-review-three">music fan</p>
        <p className="review-text" id="review-three">"Love it, it's the Best. I can't live without it!"</p>
      </div>
      <nav className="hamburger-reviews" role="navigation">
        <p className="logo-reviews">EXP│CON</p>
        <div id="menuToggle-reviews">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu-reviews">
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