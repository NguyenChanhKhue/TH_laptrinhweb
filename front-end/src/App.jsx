import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage"
import Feature from "./pages/FeaturePage"
import Contact from "./pages/ContactPage"
import "./App.css";
import Navbar from "./components/Navbar";
import DashBoard from "./pages/HomePage"


function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  )
}

export default App;
