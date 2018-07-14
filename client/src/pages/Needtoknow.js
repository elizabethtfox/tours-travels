import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import logo from "../images/passport.jpg";




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
          Learn about specific information about your destination, safety and security information, travel advisories and visa information.
          {'\n'}
          
          <a href="https://travel.state.gov/content/travel/en/international-travel.html" target="_blank">
                        <img className="img-responsive" src={"../images/passport.jpg"} width="40" alt="logo"/>
                    </a>
          </p>

          <p>
          Currency Converter

          <a href="https://www.xe.com/currencyconverter/" target="_blank">
                        <img className="img-responsive" src={"../images/currency.jpg"} width="40" alt="logo"/>
                    </a>
          </p>

          <p>
          Transportation

          <a href="https://www.uber.com/" target="_blank">
                        <img className="img-responsive" src={"../images/transport.jpg"} width="40" alt="logo"/>
                    </a>
          </p>

          <p>
          Language Translation

          <a href="https://translate.google.com/" target="_blank">
                        <img className="img-responsive" src={"../images/transport.jpg"} width="40" alt="logo"/>
                    </a>
            </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Needtoknow;

