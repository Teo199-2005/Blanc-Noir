import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Treatments = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const treatments = [
    {
      image: '/images/beauty things/Screenshot 2025-11-19 204333.png',
      title: 'Laser Treatments',
      price: '₱8,500',
      description: 'Advanced laser technology including White Doll, Carbon Laser, and ND YAG for skin rejuvenation and pigmentation correction.',
      duration: '60-90 mins'
    },
    {
      image: '/images/beauty things/Screenshot 2025-11-19 204402.png',
      title: 'Skin Boosters',
      price: '₱12,000',
      description: 'Premium injectables including Juvelook, Rejuran, and Profhilo for deep hydration and skin quality enhancement.',
      duration: '45-60 mins'
    },
    {
      image: '/images/beauty things/Screenshot 2025-11-19 204408.png',
      title: 'Signature Facials',
      price: '₱4,500',
      description: 'Customized facial treatments combining medical-grade products with advanced techniques for optimal skin health.',
      duration: '75-90 mins'
    }
  ];

  return (
    <section className="treatments" id="treatments" ref={ref}>
      <div className="section-divider"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Treatments</h2>
          <p>Premium aesthetic solutions for radiant, healthy skin</p>
        </motion.div>
        
        <div className="treatments-grid">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="treatment-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="treatment-image">
                <motion.img 
                  src={treatment.image} 
                  alt={treatment.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="treatment-content">
                <div className="treatment-header">
                  <h3>{treatment.title}</h3>
                  <div className="treatment-price">
                    <span className="price-from">Starting from</span>
                    <span className="price-amount">{treatment.price}</span>
                  </div>
                </div>
                <p>{treatment.description}</p>
                <div className="treatment-footer">
                  <span className="treatment-duration">{treatment.duration}</span>
                  <motion.a 
                    href="#" 
                    className="btn-learn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider-bottom"></div>
    </section>
  );
};

export default Treatments;