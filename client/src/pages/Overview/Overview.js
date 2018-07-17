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



//export default Overview;

// const Overview = () => (
// <div>
// <Hero backgroundImage="https://images.pexels.com/photos/5249/bread-food-restaurant-people.jpg?cs=srgb&dl=beer-bread-delicious-5249.jpg&fm=jpg">
//     {/* <h1>Pupster</h1>
//       <h2>They're the Good Boys and Girls</h2> */}
//     </Hero>
//     <Container style={{ marginTop: 30 }}>
// <Row>
// <Col size="md-12">
//     <h1>Eat, drink and be merry!</h1>
// </Col>
// </Row>
// <Row>
// <Col size="md-12">
//     <p>
//     Italian cuisine has influenced food culture around the world and is viewed as a form of art by many. Wine, cheese and pasta are important parts of Italian meals. Pasta comes in a wide range of shapes, widths and lengths, including penne, spaghetti, linguine, fusilli and lasagna.
// </p>
// <p>
// No one area of Italy eats the same things as the next. Each region has its own spin on "Italian food," according to CNN. For example, most of the foods that Americans view as Italian, such as spaghetti and pizza, come from central Italy. In the North of Italy, fish, potatoes, rice, sausages, pork and different types of cheeses are the most common ingredients. Pasta dishes with tomatoes are popular, as are many kinds of stuffed pasta, polenta and risotto. In the South, tomatoes dominate dishes, and they are either served fresh or cooked into sauce. Southern cuisine also includes capers, peppers, olives and olive oil, garlic, artichokes, eggplant and ricotta cheese.
// </p>
// <p>
// Wine is also a big part of Italian culture, and the country is home to some of the world's most famous vineyards. The oldest traces of Italian wine were recently discovered in a cave near Sicily's southwest coast. "The archaeological implications of this new data are enormous, especially considering that the identification of wine [is] the first and earliest-attested presence of such product in an archaeological context in Sicily," researchers wrote in the study, published online August 2017 in the Microchemical Journal.
// </p>
// </Col>
// </Row>
// </Container>
// </div>
