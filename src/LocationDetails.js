import React, { Component } from 'react'

class LocationDetails extends Component {
    render() {
        return(
            <div className="location-details">
            <h4>{this.props.locationData.name}</h4>
            <p>Cuisine: {this.props.locationData.cuisines}</p>

            {this.props.locationData.average_cost_for_two ? (
                <p> Average Cost for two : {this.props.locationData.average_cost_for_two}{this.props.locationData.currency}</p>
            ): ""}

            {this.props.locationData.menu_url ? (
                <a href={this.props.locationData.menu_url}> Checkout the Menu </a>
            ): ""}
            
            {this.props.locationData.featured_image ? (
                <div className="featured-image">
                 <img alt={this.props.locationData.name + 'food picture'}
                      src={this.props.locationData.featured_image} width="100%" height="150" />
                <p font="small"> Image credit: Zomato</p>
                     </div>
                    ):  ""}
           
        </div>
        )
    }

}


export default LocationDetails;