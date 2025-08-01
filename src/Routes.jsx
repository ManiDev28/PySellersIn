import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Services'; 
import ContactPage from './pages/ContactUs';

const AppRoutes = () => {
  return (
    /**
     * Routes here used to navigate between pages 
     */
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Service />} /> 
        <Route path="/contact-us" element={<ContactPage />} /> 
      </Routes>
    </Router>
  );
};

export default AppRoutes;