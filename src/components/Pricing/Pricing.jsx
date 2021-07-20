import React from "react";
import "./pricing.scss"

export default function Pricing() {
  return (<>
    <div className="pricing-page">
      <div className="pricing-section" alt="pricing-section">
        <div alt="pricing-text">
          <div alt="pricing-text-title">
            <h1 className="pricing-title">pricing</h1>
            <h2 className="pricing-subtitle">Test out our app today! Choose from three subscription Based payment models.</h2>
          </div>
          <div alt="pricing-text-red">
            <div alt="pricing-title-red">
              <h3 className="product-package" id="pricing-basic">basic</h3>
              <span id="pricing-red">__________________</span>
              <h3 className="product-payment" id="pricing-monthly">monthly</h3>
              <h1 id="red-price">$9</h1>
            </div>
            <ul className="pricing-list-red" alt="pricing-desc-red">
              <li>Very good</li>
              <li>Amazing</li>
              <li>Perfect job</li>
              <li>Love this</li>
              <li>It's so good</li>
              <li>Features</li>
            </ul>
            <a className="select-red" href="/payments" data-text="select">select</a>
          </div>
          <div alt="pricing-text-yellow">
            <div alt="pricing-title-yellow">
              <h3 className="product-package" id="pricing-advanced">advanced</h3>
              <span id="pricing-yellow">__________________</span>
              <h3 className="product-payment" id="pricing-yearly-advanced">yearly</h3>
              <h1 id="yellow-price">$99</h1>
            </div>
            <ul className="pricing-list-yellow" alt="pricing-desc-yellow">
              <li>Very very good</li>
              <li>Even Amazing</li>
              <li>Perfect job</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <a className="select-yellow" href="/payments" data-text="select">select</a>
          </div>
          <div alt="pricing-text-blue">
            <div alt="pricing-title-blue">
              <h3 className="product-package" id="pricing-pro">pro</h3>
              <span id="pricing-blue">__________________</span>
              <h3 className="product-payment" id="pricing-yearly-pro">yearly</h3>
              <h1 id="blue-price">$120</h1>
            </div>
            <ul className="pricing-list-blue" alt="pricing-desc-blue">
              <li>Very very good</li>
              <li>Even Amazing</li>
              <li>Perfect job</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <a className="select-blue" href="/payments" data-text="select">select</a>
          </div>
        </div>
        <nav className="hamburger-perks-pricing" role="navigation">
          <p className="logo-perks-pricing">EXP│CON</p>
          <div id="menuToggle-perks-pricing">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu-perks-pricing">
              <a href="/hero-section"><li>What is it</li></a>
              <a href="/hero-section#perks"><li>perks</li></a>
              <a href="/pricing"><li>pricing</li></a>
            </ul>
          </div>
        </nav>
      </div>

      <div className="perks-section" alt="perks-section">
        <div alt="perks-text">
          <a className="try-it-perks-pricing" href="/pricing" data-text="Try it now">Try it now</a>
          <h1 className="perks-pricing-title">perks</h1>
          <span className="line-pricing one-pricing"></span>
          <h2 className="perk-subtitle-pricing" id="red-pricing">subscription payment model</h2>
          <p className="description" id="desc-one-pricing">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          <span className="line-pricing two-pricing"></span>
          <h2 className="perk-subtitle-pricing" id="blue-pricing">no fee cancelation policy</h2>
          <p className="description" id="desc-two">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          <span className="line-pricing three-pricing"></span>
          <h2 className="perk-subtitle-pricing" id="yellow-pricing">subscription payment model</h2>
          <p className="description-pricing" id="desc-three-pricing">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
        </div>
        <nav className="hamburger-perks-pricing" role="navigation">
          <p className="logo-perks-pricing">EXP│CON</p>
          <div id="menuToggle-perks-pricing">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu-perks-pricing">
              <a href="/hero-section"><li>What is it</li></a>
              <a href="/hero-section#perks"><li>perks</li></a>
              <a href="/pricing"><li>pricing</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </>
  );
};