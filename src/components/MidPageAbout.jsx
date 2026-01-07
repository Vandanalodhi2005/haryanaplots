import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function MidPageAbout() {
  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">
            Secure & Government-Approved Investment
          </h2>
          <p className="text-muted">
            Presidium Empire under Haryana Shehri Plots Yojana
          </p>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">Legal & Regulatory Approvals</h5>
                <p className="text-muted">
                  Presidium Empire is a safe, transparent, and low-risk
                  investment, fully compliant with Haryana Government norms.
                </p>
                <ul className="list-unstyled">
                  <li><FaCheckCircle className="text-success me-2" />DTCP Approved</li>
                  <li><FaCheckCircle className="text-success me-2" />NOC Cleared</li>
                  <li><FaCheckCircle className="text-success me-2" />Government Norms Compliant</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">Fully Developed Residential Plots</h5>
                <ul className="list-unstyled text-muted">
                  <li><FaCheckCircle className="text-success me-2" />RCC Internal Roads</li>
                  <li><FaCheckCircle className="text-success me-2" />Water & Electricity</li>
                  <li><FaCheckCircle className="text-success me-2" />Underground Sewer Line</li>
                  <li><FaCheckCircle className="text-success me-2" />Parks & Green Spaces</li>
                  <li><FaCheckCircle className="text-success me-2" />Secured Entry Gate</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">
                  Flexible Development & Registration
                </h5>
                <ul className="list-unstyled text-muted">
                  <li><FaCheckCircle className="text-success me-2" />Hassle-Free Registration</li>
                  <li><FaCheckCircle className="text-success me-2" />Regulated Construction</li>
                  <li><FaCheckCircle className="text-success me-2" />Approved Plan Construction</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">Future-Ready Residential Asset</h5>
                <ul className="list-unstyled text-muted">
                  <li><FaCheckCircle className="text-success me-2" />Self-Use Housing</li>
                  <li><FaCheckCircle className="text-success me-2" />Long-Term Investment</li>
                  <li><FaCheckCircle className="text-success me-2" />Rental & Resale Potential</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MidPageAbout;

