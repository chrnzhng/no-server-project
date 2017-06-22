import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Main.css';

const Main = (props) => {
    if (!props.resultsObject) {
      return <div>Loading...</div>
    }

    return (
      <div className="main-wrapper">
          <h1 className="title">Current Air Quality</h1>
        <SearchBar className="search" userInput={props.userInput} handleInputChange={props.userInputFunction}/>
        <ul>
          <li>{ props.resultsObject.breezometer_description }</li>
          <li>{props.resultsObject.breezometer_aqi}</li>
          </ul>
      </div>
    )
};

export default Main;

