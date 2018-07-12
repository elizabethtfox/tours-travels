import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { Picture } from './App/sweden.jpeg';

class App extends Component {
  // onData(res) {
  //   const result = {
  //   };
  //   return result;
  // }

  render() {
    return (
      <div>

      Hi this is Mariam 

      <Button bsStyle="primary">Hit me!</Button>

      {/* <Carousel>
      <Carousel.Item>
        <img width={900} height={600} alt="sweden" src={ Picture } />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="/carousel.png" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel> */}

     </div>

      );
    };
  
  }


// export default () => (
//   <Button waves='light'>
//     <Icon>thumb_up</Icon>
//   </Button>
// )

export default App; 
