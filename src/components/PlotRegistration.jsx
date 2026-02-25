import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
  FaFilePdf,
} from "react-icons/fa";
import BankDetails from "./BankDetails.jsx";

export default function PlotRegistration() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      email: form.email.value,
      aadhaarNumber: form.aadhaarNumber.value,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registration Submitted Successfully");
        e.target.reset();
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <>
      <section className="bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7} md={9}>
              <Card className="shadow-lg border-0 rounded-4">

                {/* Header */}
                <div className="bg-success text-white text-center py-4 rounded-top">
                  <h3 className="fw-bold mb-1">Plot Registration</h3>
                  <p className="mb-0">Haryana Shehri Plots Yojana</p>
                </div>

                <Card.Body className="p-4 p-md-5">
                  <Form onSubmit={handleSubmit}>

                    {/* Name */}
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">
                        <FaUser className="me-2 text-success" />
                        Full Name *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>

                    {/* Phone */}
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">
                        <FaPhoneAlt className="me-2 text-success" />
                        Phone Number *
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">
                        <FaEnvelope className="me-2 text-success" />
                        Email ID *
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </Form.Group>

                    {/* Aadhaar Number */}
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">
                        <FaIdCard className="me-2 text-success" />
                        Aadhaar Card Number *
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="aadhaarNumber"
                        placeholder="12-digit Aadhaar number"
                        pattern="[0-9]{12}"
                        maxLength="12"
                        required
                      />
                    </Form.Group>

                    {/* Aadhaar PDF removed as requested */}

                    {/* Consent */}
                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        required
                        label="I confirm that the information provided is true and correct."
                      />
                    </Form.Group>

                    {/* Submit */}
                    <div className="d-grid">
                      <Button
                        variant="success"
                        size="lg"
                        className="fw-bold"
                        type="submit"
                      >
                        Submit Registration
                      </Button>
                    </div>

                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <BankDetails />
    </>
  );
}
