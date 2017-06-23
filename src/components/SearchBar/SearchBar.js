import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <div>
        {props.userInput}
      </div>
          
      <div className="search">
        <input className="input" placeholder="lat[40.2181] lon[-111.6133]" onChange={(e) => props.handleInputChange(e)} />
        <button className="button" onClick={(e) => props.makeRequest(e)}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;