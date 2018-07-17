import React, { Component } from 'react';
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './MapContainer'



class Overview extends Component {
    render() {
        return (
            <div>
        <Hero backgroundImage="https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?cs=srgb&dl=beer-bread-delicious-5249.jpg&fm=jpg">
            {/* <h1>Pupster</h1>
      <h2>They're the Good Boys and Girls</h2> */}
            </Hero>
            <Container style={{ marginTop: 30 }}>
    <Row>
        <Col size="md-12">
            <h1>Eat, drink and be merry!</h1>
        </Col>
        </Row>
        <Row>
        <Col size="md-12">
        <p>
        Embark on a culinary adventure though the world by exploring the diverse and thriving cuisines that the cities have to offer. A variety of cuisines have influenced food culture around the world and is viewed as a form of art by many. 
        </p>
        <p>
        The cities offer a variety of restaurants, bars and lounges.
        </p>
        <p>
        Eat your way through the city! Bon appetit'!
        </p>

        <h1> Restaurant Locator </h1>

        <MapContainer google={this.props.google} />

        </Col>
        </Row>
        </Container>
        </div>
    );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAC-UBAmHBb8SKuwLcvT0LJaC3Upq4DCVo',
})(Overview)




