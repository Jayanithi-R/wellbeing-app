import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Breakpoints
  const isTabletOrMobile = screenWidth <= 768;

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isTabletOrMobile ? "12px 16px" : "20px 40px",
    backgroundColor: "#f7f6f4",
    flexDirection: "row",
    position: "relative",
  };

  const navLinksStyle = {
    display: isTabletOrMobile ? (menuOpen ? "flex" : "none") : "flex",
    gap: isTabletOrMobile ? "15px" : "32px",
    flexDirection: isTabletOrMobile ? "column" : "row",
    alignItems: isTabletOrMobile ? "center" : "flex-start",
    backgroundColor: isTabletOrMobile ? "#f7f6f4" : "transparent",
    position: isTabletOrMobile ? "absolute" : "static",
    top: isTabletOrMobile ? "60px" : "auto",
    left: "0",
    width: isTabletOrMobile ? "100%" : "auto",
    padding: isTabletOrMobile ? "15px 0" : "0",
  };

  const navLinkStyle = {
    fontSize: isTabletOrMobile ? "14px" : "16px",
    color: "#003c3b",
    textDecoration: "none",
  };

  const navLogoStyle = {
    fontWeight: "bold",
    fontSize: isTabletOrMobile ? "18px" : "20px",
    color: "#003c3b",
  };

  const hamburgerStyle = {
    fontSize: "24px",
    cursor: "pointer",
    display: isTabletOrMobile ? "block" : "none",
    color: "#003c3b",
  };

  return (
    <nav style={navbarStyle}>
      {/* Desktop left links */}
      {!isTabletOrMobile && (
        <div style={navLinksStyle}>
          <a href="#" style={navLinkStyle}>Home</a>
          <a href="#" style={navLinkStyle}>About</a>
          <a href="#" style={navLinkStyle}>Services</a>
        </div>
      )}

      {/* Logo */}
      <div style={navLogoStyle}>Solus</div>

      {/* Hamburger (Tablet/Mobile only) */}
      {isTabletOrMobile && (
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      )}

      {/* Right links (and also all links in dropdown on mobile/tablet) */}
      <div style={navLinksStyle}>
        <a href="#" style={navLinkStyle}>Therapists</a>
        <a href="#" style={navLinkStyle}>Resources</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
