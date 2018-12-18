import React, { Component } from 'react';
import LocationDetails from './LocationDetails';


class FilterLocations extends Component {
    
    
   
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
                    <li key={location.name} className="location-list-item" location={location} onClick={() => this.props.onListItemClick(location)}>
                    {location.name}</li>
            ))}
        </ol>
        </div>
                {this.props.showDetails && (
                   <LocationDetails selectedLocation = {this.props.selectedLocation} locationData = {this.props.locationData}/>
                )}
        </div>
        )
    }
}

export default FilterLocations