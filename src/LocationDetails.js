import React, { Component } from 'react'

class LocationDetails extends Component {
    render() {
        return(
            <div className="location-details">
            <h4>{this.props.locationData.name}</h4>
            <p>{this.props.locationData.cuisines}</p>

            {this.props.locationData.average_cost_for_two ? (
                <p> Average Cost for two : {this.props.locationData.average_cost_for_two}{this.props.locationData.currency}</p>
            ): ""}
            
            {this.props.locationData.featured_image ? (
                <div className="logo">
                 <img alt={this.props.locationData.name + 'food picture'}
                      src={this.props.locationData.featured_image} width="100%" height="150" />
                     </div>
                    ):  ""}
           
        </div>
        )
    }

}


export default LocationDetails;