import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lists from "./pages/Lists";
import Map from "./pages/Map";
//import NoMatch from "./pages/NoMatch";
import './App.css';

const App = () => (
<Router>
<div>
<Switch>
<Route exact path="/" component={Map} />
<Route exact path="/lists" component={Lists} />
</Switch>
</div>
</Router>
);

export default App;
