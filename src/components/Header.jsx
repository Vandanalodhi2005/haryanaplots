import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // update mobile flag on resize
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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
       आवेदन प्रारंभ तिथि 23rd February 2026 | आवेदन की अंतिम तिथि 14th March 2026 | आवंटन की तिथि 18th March 2026 | रजिस्ट्रेशन अमाउंट केवल Rs. 21,000/- | Plot Sizes : - 100 sq. yards | 39 प्लॉट्स के लिए आवेदन लिए जा रहे है | 33% कोटा महिलाओं एवं सरकारी कर्मचारियों के लिए आरक्षित हैं
        </marquee>
      </div>

      {/* Orange Header Section */}
      <div className="orange-header">
        <div className="header-content">
          <div className="logo-section1 left-logo1">
            <div className="logo-placeholder left-logo-container">
              <img src="/logo/swachh.png" alt="Haryana Plot Logo" className="logo-image1" />
            </div>
          </div>
          {/* Left Logo Section */}
          <div className="logo-section left-logo">
            <div className="logo-placeholder left-logo-container">
              <img src="/logo/hplogo.png" alt="Haryana Plot Logo" className="logo-image" />
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
            {/* close icon shown inside mobile dropdown */}
            {isMobile && (
              <div className="menu-close-btn" onClick={closeMenu}>
                <FaTimes size={24} />
              </div>
            )}
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
          <Link to="/plotregistration" className="register-btn" onClick={closeMenu}>
            REGISTRATION ONLINE
          </Link>

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <div className="hamburger" onClick={toggleMenu}>
              {menuOpen ? <FaTimes color="#fff" size={28} /> : <FaBars color="#333" size={28} />}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
