import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Service from "./Service.jsx";
import Gallery from "./Gallery.jsx";
import Book from "./Book.jsx";
import Contact from "./Contact.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      <Contact />
    </Router>
  );
};

export default App;