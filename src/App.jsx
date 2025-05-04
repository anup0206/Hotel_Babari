import React from "react";
import Navbar from "./Navbar.jsx";
import Service from "./Service.jsx";

import Book from "./Book.jsx";
import Contact from "./Contact.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import Gallery from "./Gallery.jsx";
import About from "./About.jsx";

const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/service" element={<Service />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Contact />
    </Router>
  );
};

export default App;