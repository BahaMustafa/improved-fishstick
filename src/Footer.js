import React from 'react';
import './Footer.css';
import { FaClipboardList, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <img 
                src="/logo.webp" 
                alt="KBCI Logo" 
                className="footer-logo-img"
              />
              <h3>Kal Best Contractor, Inc (KBCI)</h3>
              <span className="footer-tagline">Since 1990</span>
            </div>
            <p className="footer-description">
              Professional construction services with over 30 years of experience. 
              Building excellence and trust in every project.
            </p>
            <div className="footer-license">
              <FaClipboardList /> 
              <span>License #1078043</span>
            </div>
          </div>

          <div className="footer-section footer-nav">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="mailto:kal@kbci.pro">Get Quote</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <a href="tel:(626) 393-2638">(626) 393-2638</a>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:kal@kbci.pro">kal@kbci.pro</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Serving Los Angeles County</span>
            </div>
          </div>

          <div className="footer-section footer-social">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a  href="https://www.facebook.com/profile.php?id=100040696403038&mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/kbci_/"
                    target="_blank"
                    rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="footer-cta">
              <h5>Ready to Start Your Project?</h5>
              <a href="mailto:kal@kbci.pro" className="footer-btn">Get Free Estimate</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Kal Best Contractor, Inc (KBCI). All rights reserved.</p>
            <p className="footer-credit">
              Website by <a href="https://techdevprime.com" target="_blank" rel="noopener noreferrer">TechDevPrime</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
