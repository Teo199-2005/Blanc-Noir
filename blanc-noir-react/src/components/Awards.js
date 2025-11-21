import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const awards = [
    { title: 'Best Aesthetic Clinic 2024', org: 'Philippine Medical Excellence Awards' },
    { title: '5-Star Patient Care', org: 'Healthcare Quality Association' },
    { title: 'Innovation in Dermatology', org: 'Asian Medical Technology Awards' },
    { title: 'Top Rated Clinic', org: 'Patient Choice Awards 2023-2024' }
  ];

  const doctors = [
    {
      name: 'Dr. Maria Santos',
      specialty: 'Lead Dermatologist',
      credentials: 'MD, Board Certified Dermatologist',
      experience: '15+ years experience',
      image: '/images/why choose us/Screenshot 2025-11-19 204100.png'
    },
    {
      name: 'Dr. James Rodriguez',
      specialty: 'Aesthetic Specialist',
      credentials: 'MD, Cosmetic Dermatology',
      experience: '12+ years experience',
      image: '/images/why choose us/Screenshot 2025-11-19 204123.png'
    },
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Laser Therapy Expert',
      credentials: 'MD, Advanced Laser Certification',
      experience: '10+ years experience',
      image: '/images/why choose us/Screenshot 2025-11-19 204135.png'
    }
  ];

  return (
    <section className="awards-doctors" ref={ref}>
      <div className="section-divider"></div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Awards & Expert Doctors</h2>
          <p>Recognized excellence and board-certified professionals</p>
        </motion.div>
        
        <div className="awards-doctors-layout">
          <div className="awards-section">
            <h3>Our Achievements</h3>
            <div className="awards-grid">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="award-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="award-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="award-content">
                    <h4>{award.title}</h4>
                    <p>{award.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="doctors-section">
            <h3>Meet Our Doctors</h3>
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={index}
                  className="doctor-card"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="doctor-image">
                    <img src={doctor.image} alt={doctor.name} />
                  </div>
                  <div className="doctor-info">
                    <h4>{doctor.name}</h4>
                    <p className="specialty">{doctor.specialty}</p>
                    <p className="credentials">{doctor.credentials}</p>
                    <p className="experience">{doctor.experience}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider-bottom"></div>
    </section>
  );
};

export default Awards;