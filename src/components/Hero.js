import React, { useState, useEffect } from "react";
import "./Hero.css";
import OfficeBack from '../assests/Images/OfficeBAck.jpg';
import office from '../assests/Images/Office.jpg';
import abstractsky from '../assests/Images/abstractSky.jpg';

const Hero = () => {
  const images = [office, OfficeBack, abstractsky];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fading out
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFade(false); // Fade back in
      }, 500); // Duration of fade-out
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className={`hero-section ${fade ? "fade-out" : "fade-in"}`}
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Ditya Overseas</h1>
        <p>Your trusted partner in global trade and commerce.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
