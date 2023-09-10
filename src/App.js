import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles.css";

import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Brands from "./components/Brands";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Brands/>
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
