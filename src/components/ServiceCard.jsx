import React from 'react';

const ServicesSection = () => {
  const styles = {
    section: {
      backgroundColor: '#f9f8f6',
      padding: '80px 40px',
      fontFamily: 'Inter, sans-serif',
      textAlign: 'center',
      overflowX:'hidden',
    },
    label: {
      textTransform: 'uppercase',
      fontSize: '12px',
      color: '#00332c',
      fontWeight: 600,
      marginBottom: '10px',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: 800,
      color: '#00332c',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#00332c',
      marginBottom: '50px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center',
      marginBottom:'20px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '25px',
      padding: '30px',
      flex: '1 1 300px',
      minWidth: '280px',
      maxWidth: '400px',
      textAlign: 'left',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    peachCard: {
      backgroundColor: '#fce6cf',
      width:'30%',

    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#00332c',
      marginBottom: '10px',
      paddingTop:'30px',
      justifyContent:'center',
      alignItems:'center',
    //   marginTop: '80px',

    },
    cardText: {
      fontSize: '0.9rem',
      color: '#00332c',
      marginBottom: '20px',
      lineHeight: '1.5',
    //   marginBottom:'80px',
    },
    buttonOutline: {
      padding: '10px 18px',
      border: '1px solid #00332c',
      borderRadius: '25px',
      color: '#00332c',
      backgroundColor: 'transparent',
      fontWeight: 600,
      cursor: 'pointer',
    },
    buttonFill: {
      padding: '10px 18px',
      backgroundColor: '#00332c',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    fullCard: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
    },
    fullText: {
      flex: 2,
    },
    fullImage: {
      flex: '1 1 50%',
      maxWidth: '150px',
    },
    fullImgStyle: {
      width: '100%',
    },
    coaching: {
        backgroundColor:'white',
        borderRadius:'30px',
        display :'flex',
        flexDirection:'row',
        gap:'20%',
        width:'100%',
    },
    coach: {
        display:'flex',
        width:'100%',
         borderRadius:'30px',
    }

  };

  return (
    <section style={styles.section}>
      <div style={styles.label}>SERVICES</div>
      <div style={styles.title}>Your Path to<br />Well-being</div>
      <div style={styles.subtitle}>
        Discover expert guidance for a healthier<br />mind and balanced life.
      </div>

      <div style={styles.cardContainer}>
        {/* Mindfulness Card */}
        <div style={{ ...styles.card, ...styles.peachCard }}>
          <div style={styles.cardTitle}>Mindfulness & Meditation</div>
          <div style={styles.cardText}>
            Guided meditation sessions and<br />
            stress management techniques.
          </div>
          <button style={styles.buttonOutline}>Learn More</button>
        </div>

        {/* Therapy Card */}
        <div style={styles.card}>
          <div style={styles.cardTitle}>One-on-One Therapy</div>
          <div style={styles.cardText}>
            Virtual and in-person therapy<br />
            sessions with licensed professionals.
          </div>
          <button style={styles.buttonOutline}>Learn More</button>
        </div>
      </div>
      <div style={styles.coaching }>
          <div style={styles.coach}>
            <div style={styles.trainimg}>
              <h2 style={styles.cardTitle}>Wellness Coaching</h2>
              <p style={styles.cardText}>
                Personalized guidance to help you build healthier habits,
                manage stress, and achieve balance in all areas of your life.<br />
            
                Our wellness coaches support you in creating sustainable routines for
                mental, emotional, and physical well-being.<br />
              </p>
              <button style={styles.buttonFill}>Learn More</button>
            </div>
            <div style={styles.fullImage}>
              <img
                src="/images/services-illustration.png"
                alt="Wellness Illustration"
                style={styles.fullImgStyle}
              />
            </div>
          </div>
        </div>
        
    </section>
  );
};

export default ServicesSection;
