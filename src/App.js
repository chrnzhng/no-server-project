import React, { Component } from 'react';
import route from './route';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apiKey from './apiKey';



import './App.css';

const BASE_URL = `https://api.breezometer.com/baqi/a?`;
// const IP_URL = `http://ip-api.com/json`;
class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      results: {},
      newResults: {},
      userInput: '',
      lat: {},
      lon: {},
      currentLat: {},
      currentLon: {}, 
      giphObj: {},    
      };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
    this.buildURL = this.buildURL.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.defaultLocation = this.defaultLocation.bind(this);
  
    
  }

/*
        This is the formatting needed for the URL request
        https://api.breezometer.com/baqi/a?lat={latitude}&lon={longitude}&key=${apiKey}
        https://api.breezometer.com/baqi/a?lat=40.2181&lon=-111.6133&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description
        */

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  componentDidMount() {
    axios.get(`http://ip-api.com/json`).then(res => res.data)
      .then((Result) => {
        this.setState({
          currentLat: Result.lat
        });
        // console.log("Result", this.state.currentLat)
        this.setState({
          currentLon: Result.lon
        });
        // console.log("Result", this.state.currentLon)
      });
  }

//This is what's actually making the get request from Breezometer
makeRequest() {
  const result = this.buildURL(this.state.userInput);
  const result2 = this.defaultLocation(this.state.userInput);

  if (this.state.userInput.length >= 1) {
    return axios.get(`${result}`).then(res => res.data)
      .then((Result) => {
        this.setState({
          results: Result
        });
       
      });
  } else {
    return axios.get(`${result2}`).then(res => res.data)
      .then((Result) => {
        this.setState({
          results: Result
        });
      });
  };
}

// gifRequest() {
//   axios.get(`http://api.giphy.com/v1/gifs/search?q=happy+birthday&api_key=${apiKey2}&limit=1`)
// }
//This is a helper function that will format the userInput into the correct format for URL request
  buildURL(userInput) {
    var formatResult = this.state.userInput.split(" ")
    const lat = formatResult[0];
    const lon = formatResult[1];
    for (var i = 0; i < formatResult.length; i++) {
      if (!isNaN(formatResult[i])) {
        //https://api.breezometer.com/baqi/a?lt={latitude}&lon={longitude}&key=${apiKey}
        return BASE_URL + `lat=${lat}` + `&lon=${lon}` + `&key=${apiKey}`;
        // console.log(urlCheck);
      } else {
        return alert('Not a valid format. Hint: Try just clicking Search!');
      }
    }

  }


  defaultLocation(userInput) {
    if (this.state.userInput.length === 0) {
      return BASE_URL + `lat=${this.state.currentLat}` + `&lon=${this.state.currentLon}` + `&key=${apiKey}`;

    }
  }

  
 

  render() {
    return (
      
      <div className="main-wrapper">
 
        <Header />
             <Main resultsObject={this.state.results} userInput={this.state.userInput} userInputFunction={this.handleInputChange} onButtonClick={this.makeRequest}/>
        <Footer />
      </div>
    );
  }
  }

export default App;
