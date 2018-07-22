import React from "react";
import "./Hero.css";

const Hero = props => (
  <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}

    <h2>
      Don't forget any items for your trip...
    </h2>
    
  </div>
);

export default Hero;
