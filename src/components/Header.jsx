import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Green Banner */}
      <div className="top-banner">
        <marquee>
आवेदन प्रारंभ तिथि 1st February 2026 | आवेदन की अंतिम तिथि 08th March 2026 | आवंटन की तिथि 12th March 2026 | रजिस्ट्रेशन अमाउंट केवल Rs. 31,000/- | Plot Sizes : - 120.3 - 157.81 sq. yards | 30 प्लॉट्स के लिए आवेदन लिए जा रहे है | 33% कोटा महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित हैं
        </marquee>
      </div>

      {/* Orange Header Section */}
      <div className="orange-header">
        <div className="header-content">
          {/* Left Logo Section */}
          <div className="logo-section left-logo">
            <div className="logo-placeholder left-logo-container">
              <img src="/logo/logo2.png" alt="Haryana Plot Logo" className="logo-image" />
            </div>
          </div>

          {/* Center Title */}
          <div className="center-title">
            <h1>हरियाणा शहरी प्लॉट योजना</h1>
            <p className="subtitle">(Haryana Shehri Plots Yojana, Govt. of Haryana)</p>
          </div>

          {/* Right Logo */}
          <div className="logo-section right-logo">
            <div className="logo-placeholder right-logo-container">
              <img src="/logo/logo1.png" alt="Azadi Amrit Mahotsav" className="logo-image" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="project-info">
          Haryana Shehri Plots Yojana - Solra, Haryana
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar-custom">
        <div className="nav-container">
          {/* Navigation Menu */}
          <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/project" className="nav-link" onClick={closeMenu}>
              Amenities
            </Link>
            <Link to="/project" className="nav-link" onClick={closeMenu}>
              Project Layout
            </Link>
            <Link to="/location" className="nav-link" onClick={closeMenu}>
              Location Map
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>

          {/* Registration Button */}
          <Link to="/register" className="register-btn" onClick={closeMenu}>
            REGISTRATION ONLINE
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}
