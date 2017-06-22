import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <div>
        {props.userInput}
      </div>
          
      <div className="search">
        <input className="input" placeholder="Current Location, Or: Lon, Lat" onChange={(e) => props.handleInputChange(e)} />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;