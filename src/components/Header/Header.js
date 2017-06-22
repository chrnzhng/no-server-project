import React, { Component } from 'react';
import './Header.css';
import breeze from './breeze.svg';
const Header = () => {
  return (
    <div className="headerBar">      
      <a href="https://breezometer.com/air-quality-api/" target="blank"><h4>Powered by Breezometer API</h4></a>
    </div>
  );
};

export default Header;