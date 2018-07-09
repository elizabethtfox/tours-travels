import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lists from "./pages/Lists";
import Map from "./pages/Map";
import App from "./pages/App";
//import NoMatch from "./pages/NoMatch";
import './App.css';

const Test = () => (
<Router>
<div>
<Switch>
<Route exact path="/" component={App} />
<Route exact path="/lists" component={Lists} />
<Route exact path="/map" component={Map} />
</Switch>
</div>
</Router>
);

export default Test;
