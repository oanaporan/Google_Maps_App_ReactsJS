import React, { Component } from 'react';
import MapContainer from './MapContainer';
import locations from './locations';
import FilterLocations from './FilterLocations';


import { FaBars } from 'react-icons/fa';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

import * as ZomatoAPI from './ZomatoAPI';

class App extends Component {
  state = {
    allLocations: locations,
    query : '',
    toggleMenu: false,
    showDetails: false,
    selectedLocation: {},
    locationData: {},
    showInfoWindow: false,
    activeMarker: {},
    activeMarkerProps: {}
  }

  onToggleMenu = () => {
    this.setState({ toggleMenu: !this.state.toggleMenu})
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim(), showDetails: false });
  }

  onListItemClick = (location) => {
    this.setState({ selectedLocation : location , showDetails : true, showInfoWindow: true})

    let {name} = location; 
    let { lat, lng } = location.position;
    ZomatoAPI.get(name, lat, lng).then(response => {
        if(response.error) {
            return this.setState({ locationData : {error:"Something went wrong fetching the data..."} })
        } else {
            return this.setState({ locationData : response[0].restaurant })
            }
        })
    }

    onClickMarker = (props, marker, e) => {
      this.setState({ showInfoWindow: true, activeMarker: marker, activeMarkerProps: props})
  }

  render() {
    const { allLocations, query } = this.state
    let showingLocations 
      if (query) {
        const match = new RegExp(escapeRegExp(query), 'i')
        showingLocations = allLocations.filter((location) => 
        match.test(location.name))
      } else {
        showingLocations = allLocations
      }
      showingLocations.sort(sortBy('name'));

    return (
      <div className="App">
        <header className="App-header">
          <h1> Grab a bite near Central Park, NY</h1>
          <button onClick={this.onToggleMenu}><FaBars/></button>
        </header>
        <MapContainer 
                     locations={showingLocations}
                      onClickMarker={this.state.onClickMarker}activeMarker={this.state.activeMarker}
                      activeMarkerProps={this.state.activeMarkerProps}
                      showInfoWindow={this.state.showInfoWindow}/>
        
        {this.state.toggleMenu && (
          <FilterLocations locations={showingLocations}
                            query={this.state.query}
                            onUpdateQuery={this.updateQuery}
                            onListItemClick={this.onListItemClick}
                            showDetails={this.state.showDetails}
                            selectedLocation={this.state.selectedLocation}
                            locationData={this.state.locationData}
                             />  
        )}

      </div>
    );
  }
}

export default App;
