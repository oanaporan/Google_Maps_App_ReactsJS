import React, { Component } from 'react';
import LocationDetails from './LocationDetails';

import * as ZomatoAPI from './ZomatoAPI';


class FilterLocations extends Component {
    state = {
        showDetails: false,
        selectedLocation: {},
        locationData: {}
    }

    onListItemClick = (location) => {
        this.setState({ selectedLocation : location , showDetails : true })
        let {name} = location; 
        let { lat, lng } = location.position;
        ZomatoAPI.get(name, lat, lng).then(response => {
            if(response.error) {
                return this.setState({ locationData : {} })
            } else {
                return this.setState({ locationData : response[0].restaurant })
                }
            })
        }
        
    

    onNewSearch = () => {
        this.setState({ showDetails: false })
    }

    render() {

        return(
            <div className="list-locations">
            
                <input 
                    className="search-locations"
                    type="text"
                    placeholder="Filter Locations..."
                    value={this.props.query}
                    onChange={(e) => this.props.onUpdateQuery(e.target.value)}
                    onClick={this.onNewSearch}/>
            
            <div className="location-list container">
                <ol className="location-list">
                {this.props.locations.map((location) => (
                    <li key={location.name} className="location-list-item" location={location} onClick={() => this.onListItemClick(location)}>
                    {location.name}</li>
            ))}
        </ol>
        </div>
                {this.state.showDetails && (
                   <LocationDetails selectedLocation = {this.state.selectedLocation} locationData = {this.state.locationData}/>
                )}
        </div>
        )
    }
}

export default FilterLocations