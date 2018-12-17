import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        map: null,
        showInfoWindow: false,
        activeMarker: {},
        activeMarkerProps: {}
    }

    mapReady = (props, map) => {
        this.setState({map})
    }

    onClickMarker = (props, marker, e) => {
        this.setState({ showInfoWindow: true, activeMarker: marker, activeMarkerProps: props})
    }

    render() {
        let { locations } = this.props
        let { activeMarker, activeMarkerProps } = this.state
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
                            onClick={this.onClickMarker}
                            name={location.name}
                            url={location.url}/>
                            
                 ))}
                    <InfoWindow 
                            marker={activeMarker}
                            visible={this.state.showInfoWindow}>
                         <div className='info-window'>
                         <h4>{activeMarkerProps.name}</h4>
                         <a href={activeMarkerProps.url}>Website</a>
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