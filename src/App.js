import React, { Component } from 'react';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apiKey from './apiKey';


import './App.css';

const BASE_URL = `https://api.breezometer.com/baqi/?`

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      results: {},
      newResults: {},
      userInput: '',
      breezometer_aqi: false,
      random_recommendations: false,
      datetime: false,
      pollutants: false,
      breezometer_description: false

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.buildURL = this.buildURL.bind(this);
  }

/*
        This is the formatting needed for the URL request
        https://api.breezometer.com/baqi/?lat={latitude}&lon={longitude}&key=${apiKey}
        */
  // componentDidMount() {
  //     axios.get(`https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
  //     .then(res => res.data)    
  //       .then((aqiResult) => {  
  //         this.setState ({ results: aqiResult } );
  //         console.log("results", this.state.results)
  //       });
  // }

  buildURL(userInput) {
    var formatResult = userInput.split(",")
    
    {
    if (!NaN(userInput)) {
        return BASE_URL + `lat=${userInput}` + `&lon=${userInput}` + `&key=${apiKey}`;
    }
    return 'Enter valid format'
}
  }

  onSubmit(e) {
    // will use this.state.userInput as part of the API request url
    

   
  }
    // And Another One
   // this.setState({
    //   newResults: response
    // })
    // axios.get(`http://ip-api.com/json`)
    //   .then(res => res.data)    
    //     .then((geoLo) => {  
    //       this.setState ({ newResults: geoLo } );
    //       console.log("geoLoResults", this.state.newResults)
    //     }); 

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  // aqiByColor() {
  //   if (breezometer_aqi >= 0 || breezometer_aqi <= 50) {
  //     return
  //   }
  //   if (breezometer_aqi > 50 )
  // }


  render() {
    return (
      
      <div className="main-wrapper">
 
        <Header />
        <Main resultsObject={this.state.results} userInput={this.state.userInput} userInputFunction={this.handleInputChange} enterLocation={this.buildURL}/>
        <Footer />
      </div>
    );
  }
}

export default App;
