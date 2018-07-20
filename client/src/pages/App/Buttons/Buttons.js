import React, { Component } from 'react';
import "./Buttons.css";
import { Button } from 'react-materialize';
import history from '../history';

import * as FontAwesome from 'react-icons/lib/fa';

class Buttons extends Component {
    
  // functions for category buttons //
 flight = () => {
    window.location.reload();
    history.replace("https://mariamschaudry.github.io/travel/Flight.html");
  }
  
  packinglist = () => {
    window.location.reload();
    history.replace("/lists");
  }
  
  maps = () => {
    window.location.reload();
    history.replace("/map");
  }
  
  needToKnow = () => {
    window.location.reload();
    history.replace("/need");
  }
  
  food = () => {
    window.location.reload();
    history.replace("/food");
  }

  home = () => {
    window.location.reload();
    history.replace("/");
  }
  
  hotel = () => {
    window.location.reload();
    history.replace("https://mariamschaudry.github.io/travel/Hotel.html");
  }

	render() {
		return (
			<div>
                <button className="b1">
                    <a href="https://mariamschaudry.github.io/travel/Flight.html">Flight</a>
                </button>

                <Button waves='light' onClick={this.packinglist}>Packing List</Button>

                <Button onClick={this.maps}>
                    Maps
                </Button>

                <Button onClick={this.needToKnow}>
                    Need to Know
                </Button>

                <Button onClick={this.food}>
                    Food &amp; Dining
                </Button>

                <button className="b1">
                    <a href="https://mariamschaudry.github.io/travel/Hotel.html">Hotel</a>
                </button>
                

			</div>
		)
	}
}

export default Buttons; 





