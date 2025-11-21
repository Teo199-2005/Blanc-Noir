import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: '/images/beauty things/Screenshot 2025-11-19 204333.png', alt: 'Laser Treatment' },
    { src: '/images/beauty things/Screenshot 2025-11-19 204402.png', alt: 'Skin Boosters' },
    { src: '/images/beauty things/Screenshot 2025-11-19 204408.png', alt: 'Facial Treatment' },
    { src: '/images/beauty things/Screenshot 2025-11-19 204414.png', alt: 'Whitening Treatment' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const socialLinks = [
    { href: 'https://www.instagram.com/blancandnoiraesthetic/', icon: 'instagram' },
    { href: 'https://www.facebook.com/blancandnoiraesthetic/', icon: 'facebook' },
    { href: 'https://tiktok.com/@blancandnoiraesthetic', icon: 'tiktok' }
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-top">
              <div className="hero-socials">
                <span>Follow Us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {social.icon === 'instagram' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    )}
                    {social.icon === 'facebook' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )}
                    {social.icon === 'tiktok' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="hero-main">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Redefining Beauty With Science & Aesthetics
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Premium skin treatments, cosmetic dermatology, and personalized care delivered by expert professionals in our state-of-the-art facility.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.a 
                  href="#contact" 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Consultation
                </motion.a>
                <motion.a 
                  href="#treatments" 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Treatments
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="hero-slideshow"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={slide.src} alt={slide.alt} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;