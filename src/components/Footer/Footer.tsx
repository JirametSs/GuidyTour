import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>🚀 GuidyTour - Your Travel Companion</h2>
        <p>เดินทางสะดวก สนุกทุกเส้นทาง กับ GuidyTour</p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} GuidyTour. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
