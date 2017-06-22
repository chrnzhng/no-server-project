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
          <li className="color-swap-AQI"><h3>AQI: { props.resultsObject.breezometer_aqi }</h3></li>
          {/*<li>{ props.resultsObject.random_recommendations }</li>*/}
          <li><h3>Last Update: { props.resultsObject.datetime }</h3></li>
          {/*<li>{ props.resultsObject.pollutants }</li>*/}
          <li><h3>AQI Description: { props.resultsObject.breezometer_description }</h3></li>
        </ul>
      </div>
    )
};
//breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description
export default Main;

