import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Moving Notice */}
      <div className="top-bar">
        <marquee>
          UNIT ALLOTMENT DATE 06-Jan-2026 | REGISTRATION AMOUNT IS REFUNDABLE FOR
          APPLICANTS WHO ARE NOT SUCCESSFUL
        </marquee>
      </div>

      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Haryana Shehri Plot Yojana
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>

              <Nav.Link as={Link} to="/project">
                Project
              </Nav.Link>

              <Nav.Link as={Link} to="/refundpolicy">
                Refund Policy
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>

            <div className="text-white fw-bold d-flex align-items-center gap-2">
              <FaPhoneAlt /> +91 8700559249
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
