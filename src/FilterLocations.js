import  React, { Component } from 'react';


class FilterLocations extends Component {
    state = {
        showDetails: false,
        selectedLocation: {}
    }

    onListItemClick = (location) => {
        this.setState({ selectedLocation : location })
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
                <li key={location.name} className="location-list-item" onClick={this.onListItemClick}>
                {location.name}</li>
            ))}
        </ol>
        </div>
                {this.state.showDetails && (
                    <div className="location-details">
                        <h3> hi</h3>
                    </div>
                )}
        </div>
        )
    }
}

export default FilterLocations