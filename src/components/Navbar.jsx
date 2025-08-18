import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f7f6f4'
    }}>
      {/* Left Links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Services</a>
      </div>

      {/* Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#003c3b' }}>
        Solus
      </div>

      {/* Right Links */}
      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#" style={linkStyle}>Therapists</a>
        <a href="#" style={linkStyle}>Resources</a>
        <a href="#" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
};

const linkStyle = {
  fontSize: '14px',
  color: '#003c3b',
  textDecoration: 'none'
};

export default Navbar;
