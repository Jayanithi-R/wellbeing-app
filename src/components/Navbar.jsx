import React, { useState, useEffect } from "react";
function Cal() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 769);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
}
const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Breakpoints
  const isTablet = screenWidth <= 900 && screenWidth > 600;
  const isMobile = screenWidth <= 600;

  const navbarStyle = {
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
    alignItems: "center",
    padding: isTablet ? "16px 24px" : isMobile ? "12px 16px" : "20px 40px",
     
    backgroundColor: "#f7f6f4",
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "15px" : "0px",
  };

  const navLinksStyle = {
    display: "flex",
    gap: isTablet ? "20px" : isMobile ? "10px" : "32px",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
  };

  const navLinkStyle = {
    fontSize: isTablet ? "13px" : isMobile ? "12px" : "14px",
    color: "#003c3b",
    textDecoration: "none",
  };

  const navLogoStyle = {
    fontWeight: "bold",
    fontSize: isMobile ? "18px" : "20px",
    color: "#003c3b",
  };

  return (
    <nav style={navbarStyle}>
      {/* Left Links */}
      <div style={navLinksStyle}>
        <a href="#" style={navLinkStyle}>Home</a>
        <a href="#" style={navLinkStyle}>About</a>
        <a href="#" style={navLinkStyle}>Services</a>
      </div>

      {/* Logo */}
      <div style={navLogoStyle}>Solus</div>

      {/* Right Links */}
      <div style={navLinksStyle}>
        <a href="#" style={navLinkStyle}>Therapists</a>
        <a href="#" style={navLinkStyle}>Resources</a>
        <a href="#" style={navLinkStyle}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
