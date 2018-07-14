import React, { Component } from 'react';
//import './Map.css';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './MapContainer'
class Map extends Component {
    render() {
        return (
            <div>
            <h1>Your Destination's Top Spots</h1>
        <MapContainer google={this.props.google} />
        <p>Created using Google Maps API and Create-React-App</p>
        </div>
    );
    }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAC-UBAmHBb8SKuwLcvT0LJaC3Upq4DCVo',
})(Map)