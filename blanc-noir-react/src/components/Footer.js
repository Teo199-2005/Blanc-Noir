import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo-wrapper">
              <img src="/images/logo/UleqwldLwrXktNdM3Y1731471144.png" alt="Blanc & Noir Logo" className="footer-logo" />
            </div>
            <h3>BLANC & NOIR</h3>
            <p className="tagline">Aesthetic Clinic</p>
            <p className="description">Redefining beauty through science and personalized aesthetic care in the heart of Makati.</p>
            <div className="certifications">
              <span className="cert-badge">FDA Approved</span>
              <span className="cert-badge">Medical Grade</span>
            </div>
          </div>
          
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <li>Laser Treatments</li>
              <li>Skin Boosters & Fillers</li>
              <li>Signature Facials</li>
              <li>Whitening Treatments</li>
              <li>Anti-Aging Solutions</li>
              <li>Consultation Services</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p>1120 1F Jade Hotel and Suites</p>
                <p>Chino Roces Ave. Brgy. La Paz</p>
                <p>Makati, Philippines</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p>0956 771 7721</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <p>Blancnoirclinics@gmail.com</p>
            </div>
            <div className="hours">
              <h5>Clinic Hours</h5>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              <p>Sunday: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-grid">
              <motion.a 
                href="https://www.instagram.com/blancandnoiraesthetic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card instagram"
                whileHover={{ y: -2 }}
              >
                <div className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div className="social-info">
                  <span className="platform">Instagram</span>
                  <span className="handle">@blancandnoiraesthetic</span>
                </div>
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/blancandnoiraesthetic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card facebook"
                whileHover={{ y: -2 }}
              >
                <div className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </div>
                <div className="social-info">
                  <span className="platform">Facebook</span>
                  <span className="handle">Blanc & Noir Aesthetic</span>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Blanc & Noir Aesthetic Clinic. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Medical Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;