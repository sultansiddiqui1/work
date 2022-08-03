// import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Golive from "./golive";
import Development from "./Development";
import Design from "./Design";
import Analyse from "./Analyse";

let canvaswidth = window.innerWidth;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Analyse" component={Analyse} />
          <Route path="/Design" component={Design} />
          <Route path="/Development" component={Development} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
