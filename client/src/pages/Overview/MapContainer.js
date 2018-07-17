import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class MapContainer extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      var lat;
      var long;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      getLocation();

      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              alert("Geolocation is not supported by this browser.");
          }
      }

      var self = this;
      function showPosition(position) {
          lat =  position.coords.latitude;
          long = position.coords.longitude;
          var myPlace = {lat: lat, lng: long };
          var map;
          var markerArray = [];

          const mapConfig = Object.assign({}, {
            center: {lat: lat, lng: long},
            zoom: 12,
            mapTypeId: 'roadmap'
          })

          var currMap = new maps.Map(node, mapConfig);
          var infowindow = new google.maps.InfoWindow();
          var directionsService = new google.maps.DirectionsService;
          var service = new google.maps.places.PlacesService(currMap);
          var directionsDisplay = new google.maps.DirectionsRenderer({map: currMap});
          var stepDisplay = new google.maps.InfoWindow;


          service.nearbySearch({
              location : myPlace,
              radius : 10000,
              types : [ 'restaurant' ]
          }, callback);

          function callback(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
          }

          var onChangeHandler = function(selectedPlace) {
            calculateAndDisplayRoute(
                directionsDisplay, directionsService, markerArray, stepDisplay, currMap, selectedPlace);
          };

          function calculateAndDisplayRoute(directionsDisplay, directionsService,
          markerArray, stepDisplay, map, selectedPlace) {
            for (var i = 0; i < markerArray.length; i++) {
              markerArray[i].setMap(null);
            }

            var start = new google.maps.LatLng(lat, long);
            var end = new google.maps.LatLng(selectedPlace.geometry.location.lat(), selectedPlace.geometry.location.lng());
            directionsService.route({
              origin: start,
              destination: end,
              travelMode: 'DRIVING'
            },
            function(response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                  showSteps(response, markerArray, stepDisplay, map);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
            });
          }

          function showSteps(directionResult, markerArray, stepDisplay, map) {
            var myRoute = directionResult.routes[0].legs[0];
            for (var i = 0; i < myRoute.steps.length; i++) {
              var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
              marker.setMap(map);
              marker.setPosition(myRoute.steps[i].start_location);
              attachInstructionText(
                  stepDisplay, marker, myRoute.steps[i].instructions, map);
            }
          }

          function attachInstructionText(stepDisplay, marker, text, map) {
            google.maps.event.addListener(marker, 'click', function() {
              stepDisplay.setContent(text);
              stepDisplay.open(map, marker);
            });
          }

          function createMarker(place) {
              const marker = new maps.Marker({ // creates a new Google maps Marker object.
                position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}, // sets position of marker to specified location
                map: currMap,
                title: place.name
              });

              google.maps.event.addListener(marker, 'click', function() {
                var isOpen = place.opening_hours.open_now ? 'Yes' : 'No';
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Rating : ' + place.rating + '<br>' +
                'Open Now : ' + isOpen + '<br>' +
                place.vicinity + '</div>');
                infowindow.open(currMap, this);
                onChangeHandler(place);
              });
          }
          self.map = currMap; // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
      }

    }
  }

  render() {
    const style = {
      width: '75vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div id="map-container">
        <div ref="map" style={style}>
          loading map...
        </div>
      </div>
    )
  }
}
