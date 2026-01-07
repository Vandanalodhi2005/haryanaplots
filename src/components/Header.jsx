import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Moving Notice */}
      <div className="top-bar">
        <marquee>
          UNIT ALLOTMENT DATE 06-Jan-2026 | REGISTRATION AMOUNT IS REFUNDABLE FOR APPLICANTS WHO ARE NOT SUCCESSFUL
        </marquee>
      </div>

      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Haryana Shehri Plot Yojana</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mx-auto gap-4">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/refundpolicy">Refund Policy</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <div className="text-white fw-bold">
              <FaPhoneAlt /> +91 8700559249
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
