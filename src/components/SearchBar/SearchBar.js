import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <div>
        {props.userInput}
      </div>
          
      <div className="search">
        <input className="input" placeholder="lat=40.7324296, lon=-73.9977264" onChange={(e) => props.handleInputChange(e)} />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;