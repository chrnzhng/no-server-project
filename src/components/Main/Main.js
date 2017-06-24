import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import AqiColors from './AqiColors/AqiColors';

import './Main.css';


const Main = (props) => {
    if (!props.resultsObject) {
      return <div>Loading...</div>
    }

    return (
      
      <div className="main-wrapper">
        
        
          <h1 className="title">Current Air Quality</h1>
        <SearchBar className="search" userInput={props.userInput} handleInputChange={props.userInputFunction} makeRequest={props.onButtonClick}/>
        <ListGroup id="mono-color">

          {/*<li className="color-swap-AQI">
            <h3>AQI: { props.resultsObject.breezometer_aqi }</h3>
          </li>*/}

          <ListGroupItem className="color-AQI"><h3>AQI: {props.resultsObject.breezometer_aqi} </h3></ListGroupItem>


          {/*<li>{ props.resultsObject.random_recommendations }</li>*/}
          <ListGroupItem className="color-Update"><h3>Last Update: { props.resultsObject.datetime }</h3></ListGroupItem>
          {/*<li>{ props.resultsObject.pollutants }</li>*/}

          <ListGroupItem className="color-Description"><h3>AQI Description: { props.resultsObject.breezometer_description }</h3></ListGroupItem>
          <ListGroupItem className="color-Pollutant"><h3>Dominant Pollutant: { props.resultsObject.dominant_pollutant_canonical_name }</h3></ListGroupItem>
          
          {/*<li><h3>Dominant Pollutant:</h3></li>*/}
        </ListGroup> 
      </div>
    )
};
//breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description
export default Main;

