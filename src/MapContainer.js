import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        map: null,
    }

    mapReady = (props, map) => {
        this.setState({map})
    }

    

    render() {
        let { locations, activeMarker, activeMarkerProps, showInfoWindow } = this.props;
        return(
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
                 {locations && locations.map((location) => (
                     <Marker
                            role='application'
                            aria-label='map'
                            key={location.name}
                            position={location.position}
                            animation={2}
                            name={location.name}
                            address={location.address}
                            url={location.url}
                            onClick={this.props.onClickMarker}/>
                            
                 ))}
                    <InfoWindow 
                            marker={activeMarker}
                            visible={showInfoWindow}>
                         <div className='info-window'>
                         <h4>{activeMarkerProps.name}</h4>
                         <p>{activeMarkerProps.address}</p>
                         </div>
                    </InfoWindow>
                         


                </Map>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC3ByjZ4k1ujc3LLi1V00_k6QwruFlK9KI')
  })(MapContainer)