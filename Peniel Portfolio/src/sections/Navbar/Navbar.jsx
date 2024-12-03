import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#hero">Home</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMobileMenu}>
        ☰ {/* Menu Icon */}
      </button>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
