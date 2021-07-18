import React, { useEffect, useState } from 'react';
import './heroSection.scss';
import first from './photos/first.jpeg';
import second from './photos/second.jpeg';
import third from './photos/third.jpeg';

export default function HeroSection() {
  const [slider, newSlide] = useState(0)
  const photos = [first, second, third]

  //photo change
  const onClickCircle = (e) => {
    const index = +e.target.getAttribute("data-key")
    newSlide(index)
  }

  useEffect(() => {

    // Logic for photo nav
    const changeOnTimer = () => {
      let count = slider + 1
      if (count > 2) {
        newSlide(0)
        return
      }
      newSlide(count)

    }

    // Change photo every 10 seconds
    const timer = setInterval(changeOnTimer, 10000)

    return () => clearInterval(timer)
  })

  return (<>
    <div className="page">
      {photos.filter((photo, index) => slider === index).map((photo, index) =>
        <img className="photos" src={photo} key={photo} alt="Hero Section" />)}
      <div className="circles">
        {/* render circles for photo switching baced on number of photos*/}
        {photos.map((photo, index) => {
          if (index === slider) {
            return <span className="circle highlighted" key={index} data-key={index}></span>
          }
          return <span className="circle" key={index} data-key={index} onClick={onClickCircle}></span>
        })}
      </div>
      <h1 className="hero-section-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <p className="hero-section-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <a className="price-button" href="/pricing" data-text="See Pricing">See Pricing</a>
    </div>
  </>
  )

}