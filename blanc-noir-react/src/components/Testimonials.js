import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: 'Sarah Martinez',
      treatment: 'Laser Treatment',
      avatar: 'S',
      quote: 'The laser treatment completely transformed my skin. The results exceeded my expectations, and the staff was incredibly professional throughout the entire process.'
    },
    {
      name: 'Maria Lopez',
      treatment: 'Skin Boosters',
      avatar: 'M',
      quote: 'Blanc & Noir\'s personalized approach made all the difference. My skin has never looked better, and I feel more confident than ever before.'
    },
    {
      name: 'Jennifer Kim',
      treatment: 'Facial Treatment',
      avatar: 'J',
      quote: 'The clinic\'s attention to detail and medical expertise gave me complete peace of mind. Outstanding results with minimal downtime.'
    }
  ];

  return (
    <section className="testimonials" ref={ref}>
      <div className="section-divider"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Client Testimonials</h2>
          <p>Real results from our valued clients</p>
        </motion.div>
        
        <div className="testimonials-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              style={{gridColumn: index < 3 ? 'auto' : 'span 2'}}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="testimonial-header">
                <div className="client-avatar">{testimonial.avatar}</div>
                <div className="client-info">
                  <h5>{testimonial.name}</h5>
                  <span className="treatment">{testimonial.treatment}</span>
                </div>
              </div>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider-bottom"></div>
    </section>
  );
};

export default Testimonials;