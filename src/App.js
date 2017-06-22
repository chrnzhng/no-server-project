import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import apiKey from './apiKey';
// import GetCurrentAQI from './components/GetCurrentAQI/GetCurrentAQI';

import './App.css';

class App extends Component {
   constructor(props) {
    super(props);

    this.state = {
      results: {},
      userInput: 'hello'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const promise = axios.get(`https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
      .then(res => res.data)    
        .then((finalResult) => {  
          this.setState ({ results: finalResult } );
          console.log("results", this.state.results)
        });
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
