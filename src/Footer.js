import React from 'react';
import './Footer.css';
import { FaClipboardList } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2025 KBCA Construction. All rights reserved.</p>
        <div className="footer-license">
          <FaClipboardList /> 
          <span>License #1078043</span>
        </div>
        <p>maintained by <a href="https://techdevprime.com">TechDevPrime</a></p>
      </div>
    </footer>
  );
}

export default Footer;
