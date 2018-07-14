import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Needtoknow from "./pages/Needtoknow";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Overview} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/needtoknow" component={Needtoknow} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
