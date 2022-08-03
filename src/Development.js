import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components_development/Development_Introduction";
import Footer from "./components/Footer";
import ShopSystem from "./components/ShopSystem";
import Intelligence from "./components_development/Intelligenz_Development";
import Form from "./components_development/Development_form";

function Development() {
  return (
    <>
      <Navbar />
      <Introduction />
      <ShopSystem style={{ backgroundColor: "#4D1F21" }} />
      <Intelligence />
      <Form />
      <Footer />
    </>
  );
}

export default Development;
