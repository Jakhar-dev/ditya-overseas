import React, {useState, useEffect} from 'react';
import './Hero.css';
import OfficeBAck from '../assests/Images/OfficeBAck.jpg';
import office from '../assests/Images/Office.jpg';
import abstractsky from '../assests/Images/abstractSky.jpg';

const Hero = () => {
  const images = [office, OfficeBAck, abstractsky ];

  const [curentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex  + 1
    );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-section" style={{backgroundImage: `url(${images[curentIndex]})`,
    }}>
      <div className="hero-content">
        <h1>Welcome to Ditya Overseas</h1>
        <p>Your trusted partner in global trade and commerce.</p>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
