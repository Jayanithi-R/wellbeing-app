import React, { useState, useEffect } from "react";
import servicesIllustration from "../assets/services-illustration.png";
import extraImage from "../assets/extraImage.png";
// import web from "../assets/web(2).png"; // ✅ your web(2).png import
// import heart from "../assets/heart image.png";
function Cal() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 769);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
}
const ServicesSection = () => {
    const styles = {
        section: {
            backgroundColor: "#f9f8f6",
              padding: "60px 0",
            fontFamily: "'Inter', sans-serif",
            width: "100%",
        },

        container: {
            textAlign: "center",
            width: "90%",
        },
        subtitle: {
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#00332c",
            fontWeight: 600,
              marginBottom: "10px",
        },
        title: {
            fontSize: "2.2rem",
            fontWeight: 800,
            color: "#00332c",
        },
        description: {
            fontSize: "1rem",
            color: "#00332c",
        },
        cardContainer: {
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            marginBottom: "40px",
            flexWrap: "wrap",

        },
        card: {
            borderRadius: "25px",
            padding: "30px",
            flex: "1 1 320px",
            maxWidth: "400px",
            textAlign: "left",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        },
        orangeCard: {
            backgroundColor: "#fce6cf",
        },
        whiteCard: {
            backgroundColor: "white",
        },
        cardImage: {
            width: "100%",
            borderRadius: "15px",
            marginBottom: "15px",
        },
        cardHeading: {
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#00332c",
            marginBottom: "10px",
        },
        cardText: {
            fontSize: "0.95rem",
            color: "#00332c",
            // marginBottom: "20px",
            lineHeight: 1.5,
        },
        cardButton: {
            padding: "10px 18px",
            border: "1px solid #00332c",
            borderRadius: "25px",
            color: "#00332c",
            backgroundColor: "transparent",
            fontWeight: 600,
            cursor: "pointer",
        },

        coachingSection: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            borderRadius: "25px",
            // padding: "40px",
            // flexWrap: "wrap",
            width :"100%",
        },
        coachingcontainer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
            background: "white",
            borderRadius: "25px",
            padding: "40px",
            flexWrap: "wrap",
            width :"70%",
        },
        coachingText: {
            flex: 2,
            textAlign: "left",
        },
        coachingHeading: {
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#00332c",
            marginBottom: "10px",
        },
        coachingParagraph: {
            fontSize: "0.95rem",
            color: "#00332c",
            marginBottom: "20px",
            lineHeight: 1.5,
        },
        coachingButton: {
            padding: "10px 18px",
            backgroundColor: "#00332c",
            color: "white",
            border: "none",
            borderRadius: "25px",
            fontWeight: 600,
            cursor: "pointer",
        },
        coachingImageWrapper: {
            flex: 1,
            maxWidth: "220px",
        },
        coachingImage: {
            width: "100%",
            borderRadius: "20px",
        },
    };

    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h6 style={styles.subtitle}>SERVICES</h6>
                <h1 style={styles.title}>Your Path to Well-being</h1>
                <p style={styles.description}>
                    Discover expert guidance for a healthier <br /> mind and balanced life.
                </p>
            </div>
            {/* Cards */}
            <div style={styles.cardContainer}>
                {/* Card 1 */}
                <div style={{ ...styles.card, ...styles.orangeCard }}>
                    {/* <img src={web} alt="Mindfulness" style={styles.cardImage} /> */}
                    <h6 style={styles.cardHeading}>Mindfulness & Meditation</h6>
                    <p style={styles.cardText}>
                        Guided meditation sessions and <br /> stress management techniques.
                    </p>
                    <button style={styles.cardButton}>Learn More</button>
                </div>

                {/* Card 2 */}
                <div style={{ ...styles.card, ...styles.whiteCard }}>
                    <h6 style={styles.cardHeading}>One-on-One Therapy</h6>
                    <p style={styles.cardText}>
                        Virtual and in-person therapy <br /> sessions with licensed
                        professionals.
                    </p>
                    <button style={styles.cardButton}>Learn More</button>
                </div>
            </div>

            {/* Coaching Section */}
            <div style={styles.coachingSection}>
                <div style={styles.coachingcontainer}>
                    <div style={styles.coachingText}>
                    <h2 style={styles.coachingHeading}>Wellness Coaching</h2>
                    <p style={styles.coachingParagraph}>
                        Personalized guidance to help you build healthier habits, manage
                        stress, and achieve balance in all areas of your life. <br />
                        <br />
                        Our wellness coaches support you in creating sustainable routines
                        for mental, emotional, and physical well-being.
                    </p>
                    <button style={styles.coachingButton}>Learn More</button>
                </div>
                <div style={styles.coachingImageWrapper}>
                    <img
                        src={servicesIllustration}
                        alt="Wellness Illustration"
                        style={styles.coachingImage}
                    />
                </div>
                </div>
                

                
            </div>
        </section>
    );
};

export default ServicesSection;
