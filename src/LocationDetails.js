import React, { Component } from 'react'

class LocationDetails extends Component {
    render() {
        return(
            <div className="location-details">
            <h4>{this.props.selectedLocation.name}</h4>
            <div className="logo">
            <img alt="restaurant-featured-img" src={this.props.locationData.featured_image} width="100%" height="150" />
            </div>
           
        </div>
        )
    }

}


export default LocationDetails;