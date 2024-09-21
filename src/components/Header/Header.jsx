import React from 'react';
import './Header.css'; // Assuming you will add CSS in a separate file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/images.jpeg" alt="Logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#advertise">Advertise</a></li>
          <li><a href="#supports">Supports</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta-button">
        <button>Try for Free</button>
      </div>
    </header>
  );
};

export default Header;
