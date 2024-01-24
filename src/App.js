import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeCompo from './components/HomeCompo';
import NavbarComponent from './components/NavbarComponent';
import AboutUsCompo from './components/AboutUsCompo';
import WhatWeDo from './components/WhatWeDo';
import Events from './components/Events';
import Donate from './components/Donate';
import Contact from './components/Contact';
import PressCompo from './components/PressCompo';
import FooterCompo from './components/FooterCompo';




function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />


        <Routes>
          <Route path="/" element={<HomeCompo />} />
          <Route path="/home" element={<HomeCompo />} />
          <Route path="/about" element={<AboutUsCompo />} />
          <Route path="/work" element={<WhatWeDo />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/press" element={<PressCompo />} />




        </Routes>
        <FooterCompo />
      </div>
    </Router>

  );
}

export default App
