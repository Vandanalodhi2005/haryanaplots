"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Main Footer */}
      <footer style={{ backgroundColor: "#f4f9f2", padding: "50px 0" }}>
        <Container>
          <Row>
            {/* Connect With Us */}
            <Col md={4} className="mb-4">
              <h5 className="fw-bold text-success mb-3">CONNECT WITH US</h5>

              <p className="d-flex align-items-center gap-2 mb-2">
                <FaEnvelope className="text-success" />
                contact@deendayaljanawasyojna.org
              </p>

              <p className="d-flex align-items-center gap-2 mb-2">
                <FaPhoneAlt className="text-success" />
                +91 8700559249
              </p>

              <p className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt className="text-success mt-1" />
                A - 118, Block - A, Sector - 63, Noida, Uttar Pradesh
                <br />
                Yamuna Express way, Solra, Haryana
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="mb-4">
              <h5 className="fw-bold text-success mb-3">Quick Link</h5>
              <ul className="list-unstyled">
                <li className="mb-2" onClick={() => navigate('/about')}>About</li>
                <li className="mb-2" onClick={() => navigate('/contact')}>Contact Us</li>
                <li className="mb-2" onClick={() => navigate('/refundpolicy')}>Refund Policy</li>
              </ul>
            </Col>

            {/* Map */}
            <Col md={4}>
  <h5 className="fw-bold text-success mb-3">
    Presidium Empire Solra Village Palwal, Haryana
  </h5>

  <div style={{ borderRadius: "8px", overflow: "hidden" }}>
    <iframe
      title="Presidium Empire Location"
      src="https://www.google.com/maps?q=Presidium+Empire,+Solra+Village,+Palwal,+Haryana&output=embed"
      width="100%"
      height="220"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</Col>

          </Row>
        </Container>
      </footer>

      {/* Bottom Copyright */}
      <div
        style={{
          backgroundColor: "#0aa44f",
          color: "#fff",
          textAlign: "center",
          padding: "12px 10px",
          fontSize: "14px",
        }}
      >
        HARYANA SHEHRI PLOTS YOJANA 16/3/2025
      </div>
    </>
  );
};

export default Footer;
