import React from "react";
import "./App.css";
import Contact from "./Contact";
import About from "./About";
import Myheader from "./Headers";
import Home from "./Home";
import Recipe from "./Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Myheader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
