import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as ZomatoAPI from './ZomatoAPI';

import LocationDetails from './LocationDetails';
import MapNotLoaded from './MapNotLoaded';

class MapContainer extends Component {
    state = {
        map: null,
        showInfoWindow: false,
        activeMarker: {},
        activeMarkerProps: {},
        showDetails: false,
        selectedLocation: {},
        locationData: {}
    }

    mapReady = (props, map) => {
        this.setState({map})
    }

    onClickMarker = (props, marker, e) => {
        this.setState({ showInfoWindow: true, activeMarker: marker, activeMarkerProps: props}) 
    }
    onInfoWindowClose = () =>
    this.setState({ activeMarker: {}, showingInfoWindow: false, activeMarkerProps: {} });
    
    onListItemClick = (location) => {
        this.setState({ selectedLocation : location , showDetails : true})

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
    
    

    render() {
        let { markers} = this.props
        let { activeMarker, activeMarkerProps} = this.state;
        return(
            <div>
            <div style={{ height: 'calc(100%-10vmin', width: '100%'}}>
            <Map 
                role="application"
                aria-label="map"
                onReady={this.mapReady}
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: 40.7687463,
                     lng: -73.980931315
                 }}>
                 {markers && markers.map((marker) => (
                     <Marker
                            role='application'
                            aria-label='map'
                            key={marker.name}
                            position={marker.position}
                            name={marker.name}
                            animation={marker.name === this.state.selectedLocation.name ? window.google.maps.Animation.BOUNCE
                                : window.google.maps.Animation.DROP
                                }
                            address={marker.address}
                            url={marker.url}
                            onClick={this.onClickMarker}/>
                            
                 ))}
                    <InfoWindow 
                            marker={activeMarker}
                            visible={this.state.showInfoWindow}
                            onClose={this.state.onInfoWindowClose}>
                         <div className='info-window'>
                         <h4>{activeMarkerProps.name}</h4>
                         <p>{activeMarkerProps.address}</p>
                         </div>
                    </InfoWindow>
                         


                </Map>
            </div>
            {this.props.toggleMenu && (
                 <div className="list-locations">
            
                 <input 
                     className="search-locations"
                     type="text"
                     placeholder="Filter Locations..."
                     value={this.props.query}
                     onChange={(e) => {
                         this.props.onUpdateQuery(e.target.value)
                         this.setState({ showDetails: false })
                        }}
                     
                     onClick={this.onNewSearch}/>
             
             <div className="location-list container">
                 <ol className="location-list">
                 {this.props.locations.map((location) => (
                     <button 
                     key={location.name}                        className="location-list-item" 
                     location={location} 
                     onClick={() => this.onListItemClick(location)}>
                     {location.name}
                         </button>
                     
             ))}
         </ol>
         </div>
                 {this.state.showDetails && (
                    <LocationDetails selectedLocation = {this.state.selectedLocation} locationData = {this.state.locationData}/>
                 )}
         </div>
            )}
           

            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: 'API-KEY', LoadingContainer: MapNotLoaded }) (MapContainer)
