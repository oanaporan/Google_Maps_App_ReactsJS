import React, { Component } from 'react';
import MapContainer from './MapContainer';
import locations from './locations';
import './App.css';

class App extends Component {
  state = {
    allLocations: locations
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Grab a bite near Central Park, NY</h1>
        </header>
        <MapContainer allLocations={this.state.allLocations}/>

      </div>
    );
  }
}

export default App;
