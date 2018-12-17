import React, { Component } from 'react'

class LocationDetails extends Component {
    render() {
        return(
            <div className="location-details">
            <h3>{this.props.selectedLocation.name}</h3>
        </div>
        )
    }

}


export default LocationDetails;