import React, { Component } from 'react';
import './Header.css';
import wind from './wind.svg';
const Header = () => {
  return (
    <div className="headerBar">      
      <a href="https://breezometer.com/air-quality-api/" target="blank"><h4>Powered by Breezometer API</h4></a>
      <img src={wind} className="topIcon" alt="wind" /> 
    </div>
  );
};

export default Header;