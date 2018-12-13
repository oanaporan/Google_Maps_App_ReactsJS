import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    state = {
        map: null
    }

    mapReady = (props, map) => {
        this.setState({map})
    }

    render() {
        return(
            <div style={{ height: '100%', width: '100%'}}>
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
                </Map>
            </div>
        )
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyC3ByjZ4k1ujc3LLi1V00_k6QwruFlK9KI')
  })(MapContainer)