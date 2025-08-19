import React from "react";

const ServicesSection = () => {
  return (
    <>
      <style>{`
        .services {
          background-color: #f9f8f6;
          padding: 80px 40px;
          font-family: 'Inter', sans-serif;
          text-align: center;
          width: 100%;
        }

        .services-label {
          text-transform: uppercase;
          font-size: 12px;
          color: #00332c;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .services-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #00332c;
          margin-bottom: 10px;
        }

        .services-subtitle {
          font-size: 1rem;
          color: #00332c;
          margin-bottom: 50px;
        }

        /* Cards Container */
        .card-container {
          display: flex;
          gap: 30px;
          justify-content: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .card {
          background-color: white;
          border-radius: 25px;
          padding: 30px;
          flex: 1 1 320px;
          max-width: 400px;
          text-align: left;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .peach-card {
          background-color: #fce6cf;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #00332c;
          margin-bottom: 10px;
        }

        .card-text {
          font-size: 0.95rem;
          color: #00332c;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .btn-outline {
          padding: 10px 18px;
          border: 1px solid #00332c;
          border-radius: 25px;
          color: #00332c;
          background-color: transparent;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-outline:hover {
          background-color: #00332c;
          color: white;
        }

        .btn-fill {
          padding: 10px 18px;
          background-color: #00332c;
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-fill:hover {
          background-color: #025c55;
        }

        /* Coaching Section */
        .coaching {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          background: white;
          border-radius: 25px;
          padding: 40px;
          flex-wrap: wrap;
        }

        .coaching-text {
          flex: 2;
          text-align: left;
        }

        .coaching-img {
          flex: 1;
          max-width: 220px;
        }

        .coaching-img img {
          width: 100%;
          border-radius: 20px;
        }

        /* ✅ Tablet */
        @media (max-width: 992px) {
          .services {
            padding: 60px 30px;
          }

          .services-title {
            font-size: 1.9rem;
          }

          .card-container {
            justify-content: center;
          }

          .coaching {
            flex-direction: column;
            text-align: center;
          }

          .coaching-text {
            text-align: center;
          }

          .coaching-img {
            max-width: 180px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 600px) {
          .services {
            padding: 40px 20px;
          }

          .services-title {
            font-size: 1.6rem;
          }

          .services-subtitle {
            font-size: 0.95rem;
          }

          .card {
            width: 100%;
            min-width: unset;
          }

          .coaching {
            padding: 20px;
          }

          .btn-outline,
          .btn-fill {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <section className="services">
        <div className="services-label">SERVICES</div>
        <div className="services-title">Your Path to<br />Well-being</div>
        <div className="services-subtitle">
          Discover expert guidance for a healthier<br />mind and balanced life.
        </div>

        {/* Cards */}
        <div className="card-container">
          <div className="card peach-card">
            <div className="card-title">Mindfulness & Meditation</div>
            <div className="card-text">
              Guided meditation sessions and<br />
              stress management techniques.
            </div>
            <button className="btn-outline">Learn More</button>
          </div>

          <div className="card">
            <div className="card-title">One-on-One Therapy</div>
            <div className="card-text">
              Virtual and in-person therapy<br />
              sessions with licensed professionals.
            </div>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        {/* Coaching Section */}
        <div className="coaching">
          <div className="coaching-text">
            <h2 className="card-title">Wellness Coaching</h2>
            <p className="card-text">
              Personalized guidance to help you build healthier habits,
              manage stress, and achieve balance in all areas of your life.<br /><br />
              Our wellness coaches support you in creating sustainable routines for
              mental, emotional, and physical well-being.
            </p>
            <button className="btn-fill">Learn More</button>
          </div>
          <div className="coaching-img">
            <img src="/images/services-illustration.png" alt="Wellness Illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
