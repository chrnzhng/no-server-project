import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import apiKey from '../apiKey';

export default class GetCurrentAQI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const results = axios.get(`https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=${apiKey.js}&fields=breezometer_aqi,random_recommendations,datetime,pollutants,breezometer_description`)
      .then(res => res.data)    
       .then((finalResult) => {  this.setState ({ results: finalResult } );
        console.log(finalResult)
      });
  }

  render() {
    return (
    //   <div>
    //     <h1>{`/r/${this.props.results}`}</h1>
    //     <ul>
    //       {this.state.results.map(post =>
    //         <li key={results.id}>{results.title}</li>
    //       )}
    //     </ul>
    //   </div>
    );
  }
}

