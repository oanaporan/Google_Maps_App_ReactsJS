import React, { Component } from 'react';
import MapContainer from './MapContainer';
import locations from './locations';
import { FaBars } from 'react-icons/fa';

import './App.css';


class App extends Component {
  state = {
    allLocations: locations,
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Grab a bite near Central Park, NY</h1>
          <button><FaBars/></button>
        </header>
        <MapContainer locations={this.state.allLocations}/>
       

      </div>
    );
  }
}

export default App;
