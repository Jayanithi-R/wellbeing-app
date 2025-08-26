import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Breakpoint
  const isTabletOrMobile = screenWidth <= 768;

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isTabletOrMobile ? "12px 16px" : "20px 40px",
    backgroundColor: "#f7f6f4",
    flexDirection: "row",
    position: "relative",
    zIndex: 1000,
  };

  const navLinksStyle = {
    display: isTabletOrMobile ? (menuOpen ? "flex" : "none") : "flex",
    gap: isTabletOrMobile ? "20px" : "32px",
    flexDirection: isTabletOrMobile ? "column" : "row",
    alignItems: "center",
    backgroundColor: isTabletOrMobile ? "#f7f6f4" : "transparent",
    position: isTabletOrMobile ? "absolute" : "static",
    top: isTabletOrMobile ? "60px" : "auto",
    left: 0,
    width: isTabletOrMobile ? "100%" : "auto",
    padding: isTabletOrMobile ? "20px 0" : "0",
    boxShadow: isTabletOrMobile ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
    flexWrap: "wrap",
    justifyContent: isTabletOrMobile ? "center" : "flex-start",
  };

  const navLinkStyle = {
    fontSize: isTabletOrMobile ? "16px" : "16px",
    color: "#003c3b",
    textDecoration: "none",
    fontWeight: "500",
  };

  const navLogoStyle = {
    fontWeight: "bold",
    fontSize: isTabletOrMobile ? "18px" : "22px",
    color: "#003c3b",
  };

  const hamburgerStyle = {
    fontSize: "26px",
    cursor: "pointer",
    display: isTabletOrMobile ? "block" : "none",
    color: "#003c3b",
  };

  return (
    <nav style={navbarStyle}>
      {/* Left links (desktop only) */}
      {!isTabletOrMobile && (
        <div style={navLinksStyle}>
          <a href="#" style={navLinkStyle}>Home</a>
          <a href="#" style={navLinkStyle}>About</a>
          <a href="#" style={navLinkStyle}>Services</a>
        </div>
      )}

      {/* Logo */}
      <div style={navLogoStyle}>Solus</div>

      {/* Hamburger (mobile/tablet only) */}
      {isTabletOrMobile && (
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>
      )}

      {/* Right links (desktop) OR full dropdown (mobile/tablet) */}
      <div style={navLinksStyle}>
        {isTabletOrMobile && (
          <>
            <a href="#" style={navLinkStyle}>Home</a>
            <a href="#" style={navLinkStyle}>About</a>
            <a href="#" style={navLinkStyle}>Services</a>
          </>
        )}
        <a href="#" style={navLinkStyle}>Therapists</a>
        <a href="#" style={navLinkStyle}>Resources</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
