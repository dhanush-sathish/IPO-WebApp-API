import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logowithoutname.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src ={ logo} alt="Bluestock Logo" />
          <span>BLUESTOCK</span>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Navigation Links - Only show on desktop or when isOpen is true */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#">IPO</a></li>
          <li><a href="#">COMMUNITY</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">BROKERS</a></li>
          <li><a href="#">LIVE NEWS <span className="new-badge">NEW</span></a></li>
          <li className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up Now</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
