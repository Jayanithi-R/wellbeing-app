import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// ✅ Import logos from assets
import partner1 from '../assets/partner1.png';
import partner2 from '../assets/partner2.png';
import partner3 from '../assets/partner3.png';
import partner4 from '../assets/partner4.png';
import partner5 from '../assets/partner5.png';

const styles = {
  container: {
    backgroundColor: '#f7f6f3',
    padding: '60px 40px',
    fontFamily: "'Inter', sans-serif",
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
  },
  header: {
    flex: 1,
    minWidth: '250px',
  },
  subheading: {
    fontSize: '10px',
    letterSpacing: '0.08em',
    color: '#00514a',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  heading: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#00342e',
    margin: '16px 0',
  },
  description: {
    color: '#265a55',
    fontSize: '14px',
    lineHeight: 1.6,
  },
  navButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '24px',
  },
  arrow: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  left: {
    backgroundColor: '#ffffff',
    color: '#00342e',
    border: '1px solid #e0e0e0',
  },
  right: {
    backgroundColor: '#00342e',
    color: '#ffffff',
    border: 'none',
  },
  testimonialCards: {
    display: 'flex',
    gap: '20px',
    flex: 2,
    minWidth: '300px',
    flexWrap: 'wrap',
  },
  card: {
    borderRadius: '24px',
    padding: '28px',
    width: '300px',
    lineHeight: 1.6,
    fontSize: '14px',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  peach: {
    backgroundColor: '#fce8d2',
    color: '#2d2d2d',
  },
  teal: {
    backgroundColor: '#00454b',
    color: '#ffffff',
  },
  author: {
    marginTop: '16px',
    fontWeight: 500,
    fontSize: '13px',
  },
  partnersSection: {
    backgroundColor: 'white',
    borderRadius: '36px',
    padding: '32px',
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  partnersHeading: {
    fontWeight: 600,
    color: '#00342e',
    fontSize: '14px',
    marginBottom: '24px',
  },
  partnersLogos: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  logo: {
    height: '28px',
    objectFit: 'contain',
  },
};

// ✅ Replace placeholders with imported logos
const partnerLogos = [partner1, partner2, partner3, partner4, partner5];

const TestimonialsSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>
        <div style={styles.header}>
          <p style={styles.subheading}>TESTIMONIALS</p>
          <h2 style={styles.heading}>
            What Our Clients <br /> Are Saying
          </h2>
          <p style={styles.description}>
            Positive experiences from users who have <br />
            benefited from therapy or wellness programs.
          </p>
          <div style={styles.navButtons}>
            <button style={{ ...styles.arrow, ...styles.left }}>
              <FaArrowLeft />
            </button>
            <button style={{ ...styles.arrow, ...styles.right }}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div style={styles.testimonialCards}>
          <div style={{ ...styles.card, ...styles.peach }}>
            <p>
              "Solus made it so easy to find the right therapist for me. The sessions
              have truly transformed my mindset, and I feel more in control of my
              emotions than ever before!"
            </p>
            <p style={styles.author}>— Anna R., 32</p>
          </div>

          <div style={{ ...styles.card, ...styles.teal }}>
            <p>
              "I was struggling with stress and anxiety, but the mindfulness program at
              Solus has helped me regain balance. I finally feel like I'm prioritizing
              my mental well-being."
            </p>
            <p style={styles.author}>— Mark S., 41</p>
          </div>
        </div>
      </div>

      <div style={styles.partnersSection}>
        <p style={styles.partnersHeading}>Our Partners</p>
        <div style={styles.partnersLogos}>
          {partnerLogos.map((src, index) => (
            <img key={index} src={src} alt={`Partner ${index + 1}`} style={styles.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
