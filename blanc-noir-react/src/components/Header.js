import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="logo-container">
          <img src="/images/logo/UleqwldLwrXktNdM3Y1731471144.png" alt="Blanc & Noir Logo" className="logo" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#treatments">Treatments</a>
          <a href="#about">About Us</a>
          <a href="#contact" className="btn-book">Book Now</a>
        </nav>
        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;