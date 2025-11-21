import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>Book Your Consultation</h2>
            <p>Take the first step towards your aesthetic goals</p>
            <div className="contact-details">
              <div className="contact-item">
                <h4>Location</h4>
                <p>1120 1F Jade Hotel and Suites<br/>Chino Roces Ave. Brgy. La Paz<br/>Metro Manila, Makati, Philippines</p>
              </div>
              <div className="contact-item">
                <h4>Clinic Hours</h4>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <select 
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
              >
                <option value="">Select Desired Treatment</option>
                <option value="laser">Laser Treatments</option>
                <option value="boosters">Skin Boosters</option>
                <option value="facials">Signature Facials</option>
                <option value="whitening">Whitening & Clarifying</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Message (Optional)" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;