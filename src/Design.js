import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Introduction from "./components_design/Design_introduction";
import Concept from "./components_design/Concept";
import Corporate_design from "./components_design/corporate_design";
import Uidesign from "./components_design/Uidesign";
import Designform from "./components_design/designform";

function Design() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Concept />
      <Corporate_design />
      <Uidesign />
      <Designform />
      <Footer />
    </>
  );
}

export default Design;
