// import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Golive from "./golive";
import Development from "./Development";
import Design from "./Design";
import Analyse from "./Analyse";
import Animation from "./components/animationsrough";

let canvaswidth = window.innerWidth;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Analyse" element={<Analyse/>} />
          <Route path="/Design" element={<Design/>} />
          <Route path="/Development" element={<Development/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </Router>
      {/* <Animation /> */}
      
    </div>
  );
}

export default App;
