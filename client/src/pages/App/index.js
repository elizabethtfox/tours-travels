import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
// import App from './Carousel';

import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<Routes />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export { default } from "./Routes.js";

