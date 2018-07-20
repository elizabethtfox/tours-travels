import React, { Component } from 'react';
import './Map.css';

import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import photo from "../../images/thingstodo.jpeg"
import * as FontAwesome from 'react-icons/lib/fa';
import { Button } from 'react-materialize';
import Buttons from '../App/Buttons/Buttons';

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './MapContainer'
class Map extends Component {
    render() {
        return (
            <div>
                <Hero backgroundImage= { photo }>
                </Hero>
                {/* <h5 className="home"><FontAwesome.FaHome/></h5> */}

                

                <Container style={{ marginTop: 30 }}>
                
                    <Row>
                        <Col size="md-12">
                            <h1 style={{ textAlign: 'center' }}>Your Destination's Top Spots</h1>
                            <input type="text" placeholder="Search for a city" />
                            <MapContainer google={this.props.google} />
                            <p>Created using Google Maps API and Create-React-App</p>
                        </Col>
                    </Row>
                    <Buttons />
                </Container>
                
            </div>
    );
    }
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAC-UBAmHBb8SKuwLcvT0LJaC3Upq4DCVo',
})(Map)