import React from "react";
import "./index.css";
import Navbar from "./assets/components/Navbar";
import PlantillasLogin from "./assets/components/PlantillasLogin";
import PlantillasNavbar from "./assets/components/PlantillasNavbar";
import PlantillasPagWeb from "./assets/components/PlantillasPagWeb";
import Footer from "./assets/components/Footer";

function App() {
 
  return (
    <>
      <Navbar />
      <section id="p_login">
        <PlantillasLogin />
      </section>

      <section id="p_navbar">
        <PlantillasNavbar />
      </section>

      <section id="p_pagweb">
        <PlantillasPagWeb />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
