import React, { Component } from 'react';

import Main from './components/Main/Main';

import axios from 'axios';
import apiKey from './apiKey';
// import GetCurrentAQI from './components/GetCurrentAQI/GetCurrentAQI';

import './App.css';

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      results: {},
      newResults: {},
      userInput: '',
      breezometer_aqi: false,

    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
      axios.get(`https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
      .then(res => res.data)    
        .then((finalResult) => {  
          this.setState ({ results: finalResult } );
          console.log("results", this.state.results)
        });
  }

  onSubmit() {
    // wil use this.state.userInput as part of the API request url
    // axios.get

    // this.setState({
    //   newResults: response
    // })
  }

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  render() {
    return (
      <div className="main-wrapper">
        <Main resultsObject={this.state.results} userInput={this.state.userInput} userInputFunction={this.handleInputChange}/>
      </div>
    );
  }
}

export default App;
