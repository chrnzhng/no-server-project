import React, { Component } from 'react';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apiKey from './apiKey';


import './App.css';

const BASE_URL = `https://api.breezometer.com/baqi/a?`;

  /*POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}

     { "foo": ${foo},
       "bar": ${bar}}
     `*/

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      results: {},
      newResults: {},
      currentIP: {},
      userInput: '',
      // breezometer_aqi: false,
      // random_recommendations: false,
      // datetime: false,
      // pollutants: false,
      // breezometer_description: false,
      lat: {},
      lon: {}

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.buildURL = this.buildURL.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.makeRequest = this.makeRequest.bind(this);
  }

/*
        This is the formatting needed for the URL request
        https://api.breezometer.com/baqi/a?lt={latitude}&lon={longitude}&key=${apiKey}
        https://api.breezometer.com/baqi/?lat=40.2181&lon=-111.6133&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description
        */
  // componentDidMount() {
  //     axios.get(`https://api.breezometer.com/baqi/?lat=40.2181&lon=-111.6133&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
  //     .then(res => res.data)    
  //       .then((Result) => {  
  //         this.setState ({ results: Result } );
  //         console.log("results", this.state.results)
  //       });
  // }


  handleInputChange(e) {
    this.setState({   
      userInput: e.target.value
    })
  }

  componentDidMount(){
    axios.get(`http://ip-api.com/json`).then(res => res.data)    
        .then((Result) => {  
          this.setState ({ currentIP: Result } );
          console.log("res", this.state.currentIP)
        });
 }

 currentLocationAQI(){
    const result = this.componentDidMount()
    
 }

  makeRequest() {
    const result = this.buildURL(this.state.userInput);

    axios.get(`${result}`).then(res => res.data)    
        .then((Result) => {  
          this.setState ({ results: Result } );
          console.log("results", this.state.results)
        });
  }


  buildURL(userInput) {
    var formatResult = this.state.userInput.split(" ")
    const lat = formatResult[0];
    const lon = formatResult[1]; {
      for (var i = 0; i < formatResult.length; i++) {
        if (!isNaN(formatResult[i])) {
          //https://api.breezometer.com/baqi/a?lt={latitude}&lon={longitude}&key=${apiKey}
          return BASE_URL + `lt=${lat}` + `&lon=${lon}` + `&key=${apiKey}`;
          // console.log(urlCheck);
        } else {
          return alert('Enter valid format ex. [40.2181 -111.6133]')
        }
      }
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
