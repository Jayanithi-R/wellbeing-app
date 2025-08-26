import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 768) setMenuOpen(false); // close menu if resizing to desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isTabletOrMobile = screenWidth <= 768;

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: isTabletOrMobile ? "12px 16px" : "20px 40px",
    backgroundColor: "#f7f6f4",
    position: "relative",
    boxSizing: "border-box",
  };

  const navLinksStyle = {
    display: isTabletOrMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isTabletOrMobile ? "column" : "row",
    alignItems: isTabletOrMobile ? "center" : "center",
    gap: isTabletOrMobile ? "20px" : "32px",
    position: isTabletOrMobile ? "absolute" : "static",
    top: isTabletOrMobile ? "60px" : "auto",
    left: "0",
    width: isTabletOrMobile ? "100%" : "auto",
    backgroundColor: isTabletOrMobile ? "#f7f6f4" : "transparent",
    padding: isTabletOrMobile ? "20px 0" : "0",
    borderRadius: isTabletOrMobile ? "0 0 12px 12px" : "0",
    boxShadow: isTabletOrMobile && menuOpen ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
    zIndex: 1000,
  };

  const navLinkStyle = {
    fontSize: isTabletOrMobile ? "15px" : "16px",
    color: "#003c3b",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s",
  };

  const navLogoStyle = {
    fontWeight: "bold",
    fontSize: isTabletOrMobile ? "18px" : "20px",
    color: "#003c3b",
    zIndex: 1100,
  };

  const hamburgerStyle = {
    fontSize: "26px",
    cursor: "pointer",
    display: isTabletOrMobile ? "block" : "none",
    color: "#003c3b",
    zIndex: 1100,
  };

  return (
    <nav style={navbarStyle}>
      {/* Desktop left links */}
      {!isTabletOrMobile && (
        <div style={{ display: "flex", gap: "32px" }}>
          <a href="#" style={navLinkStyle}>Home</a>
          <a href="#" style={navLinkStyle}>About</a>
          <a href="#" style={navLinkStyle}>Services</a>
        </div>
      )}

      {/* Logo */}
      <div style={navLogoStyle}>Solus</div>

      {/* Hamburger */}
      {isTabletOrMobile && (
        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      )}

      {/* Right links (Desktop) OR Dropdown (Mobile/Tablet) */}
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
