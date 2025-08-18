
import React from 'react';
import bgImage from '../assets/hero.png';

const styles = {
  works: {
    position: "relative",
    backgroundColor: "#f9f8f6",
    padding: "50px",
    // textAlign: "center",
    overflow: "hidden",
    fontFamily: "'Bricolage Grotesque'",
    width:"100%",
    display:"flex",
    overflowX:"hidden",
    // justifyContent:"center",
    // position:"absolute",
    height:"100vh",
  },
  workContainer: {
    position: "relative",
    backgroundColor: "#F9E6D0",
    padding: "20px",
    // textAlign: "center",
    overflow: "hidden",
    fontFamily: "'Inter', sans-serif",
    width:"90%",
    display:"flex",
    overflowX:"hidden",
    height:"70vh",
   justifyContent:"center",
   alignItems:"center",
  },
  bgImg: {
    display: "none", 
  },
  heading: {
    fontSize: "2.8rem",
    color: "#00332c",
    fontWeight: "800",
    marginBottom: "20px",
  },
  paragraph: {
    color: "#404040",
    fontSize: "1.1rem",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  button: {
    backgroundColor: "#00332c",
    color: "white",
    padding: "12px 24px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
  },
  illustration: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    pointerEvents: "none",
    borderRadius: "0 0 40px 40px",
  },
};
const HeroSection = () => {
  return (
    <>
      <section style={styles.works}>
      <div style={styles.WorkContiner}>
        <h5 style={styles.title}>HOW IT WORKS</h5>
        <h1 style={styles.heading}>
          We Help You<br />
          Prioritize Your<br />
          Mental Health
        </h1>
        <p style={styles.paragraph}>
          Browse therapists, book a session, and<br />
          start your healing journey with trusted<br />
          professionals.
        </p>
        <button style={styles.button}>Find A Therapist</button>
      </div>
      <div style={styles.imageContainer}>
        {/* <img
          src={illustration}
          alt="Mental Health Illustration"
          style={styles.image}
        /> */}
      </div>
    </section>
    </>
    );
    };

export default HeroSection;
