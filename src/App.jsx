import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import HeroSection from './components/HeroSection/HeroSection';
import Red from './components/Red/Red';
import Yellow from './components/Yellow/Yellow';
import Perks from './components/Perks/Perks';
import Reviews from './components/Reviews/Reviews';
import GetExpCon from './components/GetExpCon/GetExpCon';
import Pricing from './components/Pricing/Pricing';
import Payments from './components/Payments/Payments';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/hero-section">
            <HeroSection />
            <Red />
            <Yellow />
            <Perks />
            <Reviews />
          </Route>
          <Route exact path="/get-exp-con">
            <GetExpCon />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/payments">
            <Payments />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};