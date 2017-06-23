import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <div>
        {props.userInput}
      </div>
          
      <div className="search">
        <input className="input" placeholder="40.2181, -111.6133" onChange={(e) => props.handleInputChange(e)} />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;