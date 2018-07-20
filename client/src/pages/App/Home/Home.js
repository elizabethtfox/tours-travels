import React, { Component } from 'react';
import './Home.css'; 
import Background from '../Home/sweden.jpeg';
import App from '../Carousel';
import { Button } from 'react-materialize';
import Buttons from './../Buttons/Buttons';
import * as FontAwesome from 'react-icons/lib/fa';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }

  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (

      // Everything needs to be in this div //

      <div> 
        {
          isAuthenticated() &&
          <div className="container column">
              <div className="valign-wrapper">

              <h5 className="planeIcon"><FontAwesome.FaPlane/></h5>
              <a className="goHome"
        
                style={{ cursor: 'pointer' }}
                onClick={this.home}
              >
                Tours &amp; Travels
              </a>

              <button className="logout"> 
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>

              </button>
              </div>
            {/* </h5> */}

            <br/>

            <App />

            <Buttons />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
            <img className = "bg" src = { Background } alt = "Sweden" />
              <h3>Tours &amp; Travels</h3>
              <h6>
                Organize your dream vacation with ease in just a few minutes!
              </h6>
              <br />
              <br />
              <h5>
                {' '}
                <button className="login"
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
                </button>
                {' '}
              </h5>
            </div>
          )
        }
        
      </div>
      );
    }
  }

  export default Home;