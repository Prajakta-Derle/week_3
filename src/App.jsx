import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Tour from "./components/Tour";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Features" element={<Features />} /> 
        <Route path="/Tour" element={<Tour />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
};

export default App;
