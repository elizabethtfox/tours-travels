import auth0 from 'auth0-js';

import history from './history';

export default class Auth {
  // Please use your own credentials here
  auth0 = new auth0.WebAuth({
    domain: 'toursandtravels.auth0.com',
    clientID: '8GgYOc2cudh6RtkvGkf6qsahTPwUECgX',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://tours-travels-project-3.herokuapp.com',
    audience:'https://toursandtravels.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'

  //   // https://toursandtravels.auth0.com/userinfo
  //   // 'https://divyanshu.auth0.com/userinfo'
  });

  // auth0 = new auth0.WebAuth({
  //   domain: 'divyanshu.auth0.com',
  //   clientID: 'TJyKPI6aRiRwgr6SxlT7ExW10NEHW4Vy',
  //   redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://appbaseio-apps.github.io/reactivesearch-auth0-example/callback',
  //   audience: 'https://divyanshu.auth0.com/userinfo',
  //   responseType: 'token id_token',
  //   scope: 'openid'
  // });


  login = () => {
    this.auth0.authorize();
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

// HOW THE AUTHENTICATION WILL WORK //
// Here’s how the authentication service works in a nutshell:

// auth0 = is a new instance of the Auth0 client. The redirectUri is set to localhost in development and to the project domain otherwise (which is github pages for this project)

// login method =  calls the authorize method on the auth0 client which will open up the Auth0 login screen.

// handleAuthentication method =  calls the parseHash method on the auth0 client. We’ll call this after successful authentication to read the token information from the page URL Auth0 redirects to after authentication.

// setSession stores the information about access_token, id_token and expires_at in local storage so we can use it later without going through the authentication process again.

// logout = clears all the session information about the tokens and expiry time from the local storage. After logout the user will need to authenticate (login) again to get the tokens.

// isAuthenticated = checks if the token is past expiry time (set at the time of login). If the token is expired, the user will have to authenticate again and get a fresh set of tokens.//
