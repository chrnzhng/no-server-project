import React from 'react';
import global from './global.svg';

const Footer = () => {
    return (
        <div className="footerBar">                
      <a href="http://ip-api.com/" target="blank"><h5 className="bottom-text">Geolocation @ip-api.com/docs/api:json</h5></a>
      {/*<a><img src={global} className="bottom-image" alt="globe"/></a>*/}
      
    </div>

    //    <div className="headerBar">      
    //   <a href="https://breezometer.com/air-quality-api/" target="blank"><h4 className="top-text">Powered by Breezometer API</h4></a>
    //   <a href="https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI" target="blank"><img src={wind} className="image" alt="wind-breeze"/></a>
    // </div>
    );
};

export default Footer;