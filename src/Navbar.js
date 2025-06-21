import React, { useState } from 'react';
import './App.css';
import { FaPhone, FaBars, FaTimes, FaClipboardList } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/logo.webp" 
            alt="KBCI Logo" 
            className="nav-logo-img"
          />
          <div className="nav-logo-text">
            <h2>KBCI</h2>
            <span>Since 1990</span>
          </div>
        </div>
        
        <div className="nav-contact-info">
          <a href="tel:(626) 393-2638" className="nav-phone">
            <FaPhone /> (626) 393-2638
          </a>
          <div className="nav-license">
            <FaClipboardList /> 
            <span>License #1078043</span>
          </div>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="mailto:kal@kbci.pro" className="nav-link cta-button" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
