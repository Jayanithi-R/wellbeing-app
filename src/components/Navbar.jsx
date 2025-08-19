import React from "react";

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          font-family: 'Inter', sans-serif;
          background-color: #f7f6f4;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          color: #003c3b;
          text-decoration: none;
        }

        .nav-logo {
          font-weight: bold;
          font-size: 20px;
          color: #003c3b;
        }

        /* ✅ Tablet */
        @media (max-width: 900px) {
          .navbar {
            padding: 16px 24px;
          }

          .nav-links {
            gap: 20px;
          }

          .nav-link {
            font-size: 13px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .nav-logo {
            font-size: 18px;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Left Links */}
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Services</a>
        </div>

        {/* Logo */}
        <div className="nav-logo">Solus</div>

        {/* Right Links */}
        <div className="nav-links">
          <a href="#" className="nav-link">Therapists</a>
          <a href="#" className="nav-link">Resources</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
