import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Services'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
       <Route path="/services" element={<Service />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;