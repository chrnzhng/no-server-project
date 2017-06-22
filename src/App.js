import React, { Component } from 'react';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import apiKey from './apiKey';


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

  // componentDidMount() {
  //     axios.get(`https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=${apiKey}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
        /*
        This is the formatting needed for the URL request
        https://api.breezometer.com/baqi/?lat={latitude}&lon={longitude}&key=YOUR_API_KEY
        */
  //     .then(res => res.data)    
  //       .then((aqiResult) => {  
  //         this.setState ({ results: aqiResult } );
  //         console.log("results", this.state.results)
  //       });
  // }

  onSubmit() {
    // wil use this.state.userInput as part of the API request url
    // axios.get

    // this.setState({
    //   newResults: response
    // })
    axios.get(`http://ip-api.com/json`)
      .then(res => res.data)    
        .then((geoLo) => {  
          this.setState ({ newResults: geoLo } );
          console.log("geoLoResults", this.state.newResults)
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
 
        <Header />
        <Main resultsObject={this.state.results} userInput={this.state.userInput} userInputFunction={this.handleInputChange}/>
        <Footer />
      </div>
    );
  }
}

export default App;
