import React, { Component } from 'react';
import './Home.css'; 
import Background from '../Home/sweden.jpeg';
import App from '../Carousel';
import { Button } from 'react-materialize';
import Buttons from './../Buttons/Buttons';
import history from '../history';

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
              <Button>
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>
              </Button>
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
              <h5>Tours and Travels</h5>
              <h5>
                Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  log in
                </a>
                {' '}to continue.
              </h5>
            </div>
          )
        }
        
      </div>
      );
    }
  }

  export default Home;