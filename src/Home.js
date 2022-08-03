import "./Home.css";
import React, { Component }  from 'react';

import Navbar from "./components/navbar";
import Intro from "./components/Intro";
import Competencies from "./components/competencies";
import WhyUs from "./components/whyus";
import Vision from "./components/vision";
import Footer from "./components/Footer";
import Chart from "./components/chart.tsx";
import About from "./About";

let canvaswidth =  window.innerWidth;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Competencies />
      <WhyUs />
      <Vision />
      <Chart width={canvaswidth} height={1500} />
      <Footer />
      <About />
    </div>
  );
}

export default App;
