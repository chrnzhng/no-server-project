import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import wind from './wind.svg';


const Header = () => {
  return (
    <div className="headerBar">      
      <Link className="link-top" to='/video'>Breezometer Developer Video</Link>
      <a href="https://en.wikipedia.org/wiki/Air_quality_index" target="blank"><img src={wind} className="image" alt="wind-breeze"/></a>
    </div>
  );
};

export default Header;

//<a href="https://breezometer.com/air-quality-api/" target='blank'><h4 className="top-text">Powered by Breezometer API</h4></a>