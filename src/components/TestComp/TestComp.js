import React from 'react';
import './TestComp.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <button onClick={()=>{alert("soon")}}  className="hero-button">Watch Free For 30 Days</button>
      </div>
    </div>
  );
};

export default HeroSection;