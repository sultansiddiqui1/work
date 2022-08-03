import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Values from './components_aboutus/values_aboutus'
import Chart from './components/chart.tsx'

let canvaswidth = window.innerWidth;
function About() {
  return (
    <>
      <Navbar />
      <Values />
      <Chart width={canvaswidth} height={1500} />
      <Footer />
    </>
  );

}

export default About
