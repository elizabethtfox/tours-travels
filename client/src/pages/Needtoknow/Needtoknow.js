import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import passport from "../../images/passport.jpg";
import currency from "../../images/currency.jpg";
import language from "../../images/language.jpg";
import transport from "../../images/transport.jpeg";




const Needtoknow = () => (
<div>
    <Hero backgroundImage="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?cs=srgb&dl=adventure-atlas-business-1051075.jpg&fm=jpg">
    </Hero>
    <Container style={{ marginTop: 30 }}>
        <Row>
            <Col size="md-12">
                <h1>Important Things You Need to Know</h1>
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
                <p>
                 <a href={"https://travel.state.gov/content/travel/en/international-travel.html"} target="_blank"> <img className="img-responsive" src={ passport } width="200" alt="passport"/>
                 </a>
                {'\n'}
                Learn about specific information about your destination, safety and security information, travel advisories and visa information.
                </p>

                <p>
                <a href="https://www.xe.com/currencyconverter/" target="_blank"><img className="img-responsive" src={currency} width="200" alt="currency"/>
                </a>
                Currency Converters
                </p>

                <p>
                <a href="https://www.uber.com/" target="_blank">
                <img className="img-responsive" src={transport} width="200" alt="transport"/>
                </a>
                Transportation
                </p>

                <p>
                <a href="https://translate.google.com/" target="_blank">
                <img className="img-responsive" src={language} width="200" alt="language"/>
                </a>
                Language Translation
                </p>
            </Col>
        </Row>
    </Container>
</div>
);

export default Needtoknow;