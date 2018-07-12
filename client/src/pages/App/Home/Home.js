import React, { Component } from 'react';
import './Home.css'; 
import App from '../App';
import Background from '../Home/sweden.jpeg';

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
            <h5>
              You are logged in!{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>.
            </h5>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
            <img className = "bg" src = { Background } alt = "Sweden" />
              <h5>Tours and Travels</h5>
              {/* <img src={ Background } alt="Sweden" /> */}
              <h5>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                >
                  Log In
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