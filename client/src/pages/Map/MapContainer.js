import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

    state = {
        locations: [
            { name: "Big Ben", location: {lat: 51.500729, lng: -0.124625} },
            { name: "London Eye", location: {lat: 51.503399, lng: -0.119519} },
            { name: "Westminster Abbey", location: {lat: 51.499292, lng: -0.12731} },
            { name: "Buckingham Palace", location: {lat: 51.501364, lng: -0.14189} },
            { name: "Tower of London", location: {lat: 51.508112, lng: -0.075949} },
            { name: "Tower Bridge", location: {lat: 51.505456, lng: -0.075356} },
            { name: "British Museum", location: {lat: 51.519413, lng: -0.126957} },
            { name: "River Thames", location: {lat: 51.574484, lng: -0.610019} }
        ]
    };

    componentDidUpdate() {
        this.loadMap(); // call loadMap function to load the google map
    }

    loadMap() {
        if (this.props && this.props.google) { // checks to make sure that props have been passed
            const {google} = this.props; // sets props equal to google
            const maps = google.maps; // sets maps to google maps props

            const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
            const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

            const mapConfig = Object.assign({}, {
                center: {lat: 51.507351, lng: -0.127758}, // sets center of google map to NYC.
                zoom: 13, // sets zoom. Lower numbers are zoomed further out.
                mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
            })

            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

            this.state.locations.forEach( location => { // iterate through locations saved in state
                const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
                    position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
                    map: this.map, // sets markers to appear on the map we just created on line 35
                    title: location.name // the title of the marker is set to the name of the location
                });
        })

        }
    }

    componentDidMount() {

        this.loadMap();

    }

    render() {
        const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
            width: '70vw', // 90vw basically means take up 90% of the width screen. px also works.
            height: '80vh', // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
        };

        return ( // in our return function you must return a div with ref='map' and style.
            <div ref="map" style={style}>
            loading map...
            </div>
    )
    }
}