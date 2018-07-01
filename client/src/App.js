import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Lists from "./pages/Lists";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
<Router>
<div>
<Nav />
<Switch>
<Route exact path="/" component={Lists} />
<Route exact path="/lists" component={Lists} />
<Route exact path="/lists/:id" component={Detail} />
<Route component={NoMatch} />
</Switch>
</div>
</Router>
);

export default App;
