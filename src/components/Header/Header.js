import React, { Component } from 'react';
import './Header.css';
import wind from './wind.svg';
import spinner9 from './spinner9.png';
const Header = () => {
  return (
    <div className="headerBar">      
      <a href="https://breezometer.com/air-quality-api/" target="blank"><h4 className="top-text">Powered by Breezometer API</h4></a>
      <a href="https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI" target="blank"><img src={wind} className="image" alt="wind-breeze"/></a>
    </div>
  );
};

export default Header;