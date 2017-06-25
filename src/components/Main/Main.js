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
          <ListGroup className="title">

            <ListGroupItem><h4>Last Update: { props.resultsObject.datetime }</h4></ListGroupItem>
            <ListGroupItem><h4>Country Name: { props.resultsObject.country_name }</h4></ListGroupItem>  
            <ListGroupItem><h4>AQI: {props.resultsObject.breezometer_aqi}</h4></ListGroupItem>   
            <ListGroupItem><h4>AQI Description: { props.resultsObject.breezometer_description }</h4></ListGroupItem>
            <ListGroupItem><h4>Dominant Pollutant: { props.resultsObject.dominant_pollutant_canonical_name }</h4></ListGroupItem>
            {/*<ListGroupItem className=""><h4>Main: { props.resultsObject.dominant_pollutant_text}</h4></ListGroupItem>*/}
            {/*<ListGroupItem className=""><h4>Effects: { props.resultsObject.dominant_pollutant_text[effects] }</h4></ListGroupItem>
            <ListGroupItem className=""><h4>Causes: { props.resultsObject.dominant_pollutant_text[causes] }</h4></ListGroupItem>*/}
          </ListGroup> 
      </div>
    )
};
//breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description
export default Main;
                    

