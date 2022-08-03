import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Introduction from "./components_analyse/introduction_analyse";
import Software from "./components_analyse/Software_analyse";
import Requirement from "./components_analyse/Requirement";
import Feasibility from "./components_analyse/Feasibility";
import Form from './components_analyse/analyse_form';
function Analyse() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Software />
      <Requirement />
      <Feasibility />
      <Form />
      <Footer />
    </>
  );
}

export default Analyse;
