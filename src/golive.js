import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Introsection from "./components_golive/Introsection";
import ShopSystem from "./components/ShopSystem";
import Intelligenz from "./components/Intelligence";
import Form from "./components/Form";

function golive() {
  return (
    <>
      <Navbar />
      <Introsection />
      <ShopSystem style={{ backgroundColor: "#354833" }} />
      <Intelligenz />
      <Form style={{ backgroundColor: "#354833" }} />
      <Footer />
    </>
  );
}

export default golive;
