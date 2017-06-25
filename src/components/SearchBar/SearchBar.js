import React from 'react';
// import { Button } from 'react-bootstrap';
import './SearchBar.css';



const SearchBar = (props) => {
  return (
    <div>
      <div>
        {/*{props.userInput}*/}
      </div>
          
      <div className="search">
        <input className="input" placeholder="lat[40.2181] lon[-111.6133]" onChange={(e) => props.handleInputChange(e)} />
        <button type="button" className="btn btn-info" onClick={(e) => props.makeRequest()}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
