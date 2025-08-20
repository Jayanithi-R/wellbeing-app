import React from "react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Articles & Guides",
      description:
        "Practical tips on stress management, mindfulness, and emotional resilience.",
      buttonColor: "#facc15", // yellow
    },
    {
      title: "Meditation & Relaxation",
      description:
        "Audio sessions for guided meditation and deep breathing exercises.",
      buttonColor: "#34d399", // green
    },
    {
      title: "Webinars & Workshops",
      description:
        "Live and recorded sessions with mental health professionals.",
      buttonColor: "#f9a8d4", // pink
    },
  ];

  return (
    <>
      <style>{`
        .resources-section {
          background-color: #f9f9f7;
          padding: 60px 20px;
          font-family: "Inter", sans-serif;
          text-align: center;
        }

        .resources-header {
          max-width: 650px;
          margin: 0 auto 50px;
        }

        .small-heading {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: #4b5563;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .main-heading {
          font-size: 2.2rem;
          font-weight: 800;
          color: #00332c;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .sub-text {
          font-size: 1rem;
          color: #404040;
          line-height: 1.6;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .resource-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 30px 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #00332c;
          margin-bottom: 10px;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #404040;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .explore-btn {
          border: none;
          padding: 10px 24px;
          border-radius: 999px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #00332c;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .explore-btn:hover {
          transform: scale(1.05);
        }

        /* ✅ Responsive Styles */
        @media (max-width: 992px) {
          .resources-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }

          .main-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <section className="resources-section">
        <div className="resources-header">
          <p className="small-heading">EXPLORE & LEARN</p>
          <h2 className="main-heading">
            Resources for <br /> Your Well-being
          </h2>
          <p className="sub-text">
            Explore expert insights, self-care guides, and tools to support your
            mental health.
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((res, index) => (
            <div key={index} className="resource-card">
              <h3 className="card-title">{res.title}</h3>
              <p className="card-desc">{res.description}</p>
              <button
                className="explore-btn"
                style={{ backgroundColor: res.buttonColor }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ResourcesSection;
