import React from 'react';
import bgImage from '../assets/hero.png';

const styles = {
  hero: {
    position: "relative",
    backgroundColor: "#f9f8f6",
    // borderRadius: "40px",
    padding: "",
    textAlign: "center",
    overflow: "hidden",
    fontFamily: "'Bricolage Grotesque'",
    width:"100%",
    display:"flex",
    overflowX:"hidden",
    justifyContent:"center",
    // position:"absolute",
    height:"100vh",
  },
  heroContainer: {
    position: "relative",
    backgroundColor: "#F9E6D0",
    borderRadius: "40px",
    padding: "20px",
    textAlign: "center",
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
      <div style={styles.hero}>
        <div style={styles.heroContainer}>
           {/* <img style={styles.bgImg} alt="background" src={} /> */}
                <div className="hero-content">
                    <h1>
                       Support for Your
                       Mental Well-being
                    </h1>
                    <p>
                       Connect with licensed therapists, counselors,
                       and wellness coaches to support your journey.
                    </p>
                       <button style={styles.button} alt="button">Get Started</button>
                </div>
        </div>
      </div>
    </>
    );
    };

export default HeroSection;
