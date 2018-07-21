import React, { Component } from 'react';
import "./Buttons.css";
import { Button } from 'react-materialize';
import history from '../history';
import airplane from '../Images/airplane.png';
import bellhop from '../Images/bellhop.png';
import luggage from '../Images/luggage.png';
import gps from '../Images/gps.png';
import passport from '../Images/passport.png';
import dinner from '../Images/dinner.png';

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
			<div className="buttonHolder">
                <Button className="flight">
                    <a href="https://mariamschaudry.github.io/travel/Flight.html">
                    <img className="img-responsive" src={airplane} width='90' height='90' padding-right='50px'></img><b>Flight</b></a>
                </Button>

                <Button className="packingList" onClick={this.packinglist}>
                  <img className="img-responsive" src={luggage} width='90' height='90' padding-right='50px'></img>
                  <b>Packing List</b>
                </Button>

                <Button className="maps" onClick={this.maps}>
                  <img className="img-responsive" src={gps} width='90' height='90' padding-right='50px'></img><b>Maps</b>
                </Button>

                <Button className="needToKnow" onClick={this.needToKnow}>
                  <img className="img-responsive" src={passport} width='90' height='90' padding-right='50px'></img><b>Need to Know</b>
                </Button>

                <Button className="food" onClick={this.food}>
                  <img className="img-responsive" src={dinner} width='90' height='90' padding-right='50px'></img><b>Food &amp; Dining</b>
                </Button>

                <Button className="hotel">
                    <a href="https://mariamschaudry.github.io/travel/Hotel.html"><img className="img-responsive" src={bellhop} width='90' height='90'></img></a>
                </Button>
                

			</div>
		)
	}
}

export default Buttons; 





