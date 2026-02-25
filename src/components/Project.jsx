import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <Container fluid className="py-5 bg-light">
        <Container>
          {/* Page Heading */}
          <h2 className="text-center text-success fw-bold mb-3">
            Presidium Empire – Project Details
          </h2>
          <p className="text-center text-muted mb-5">
            Haryana Shehri Plots Yojana | Solra Village, District Palwal, Haryana
          </p>

          {/* Overview */}
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <p>
                <strong>Presidium Empire</strong> is a fully developed and
                ready-to-registry residential plotting project under Haryana
                Shehri Plots Yojana, strategically located at Solra Village,
                District Palwal, Haryana, near the Noida International Jewar
                Airport.
              </p>

              <Row className="mt-3">
                {[
                  "Fully Paid-Up Land",
                  "Registry & Mutation Available",
                  "DTCP Approved & NOC Cleared",
                  "Clear title with complete legal compliance",
                ].map((item, index) => (
                  <Col md={6} key={index} className="mb-2">
                    <FaCheckCircle className="text-success me-2" />
                    {item}
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          {/* Development & Infrastructure */}
          <Row className="mb-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="bg-success text-white fw-bold">
                  Development & Infrastructure
                </Card.Header>
                <Card.Body>
                  {[
                    "Water supply connection",
                    "Electricity connection",
                    "Underground sewer line",
                    "RCC internal roads",
                    "Boundary wall around the project",
                    "Secured main entry gate",
                    "Landscaped parks & green spaces",
                  ].map((item, index) => (
                    <p key={index}>
                      <FaCheckCircle className="text-success me-2" />
                      {item}
                    </p>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Plot Specifications */}
            <Col md={6}>
              <Card className="h-100 shadow-sm">
                <Card.Header className="bg-success text-white fw-bold">
                  Plot Specifications
                </Card.Header>
                <Card.Body>
                  <p>
                    <FaCheckCircle className="text-success me-2" />
                    Minimum Plot Size: <strong>100 Sq. Yards</strong>
                  </p>
                  <p>
                    <FaCheckCircle className="text-success me-2" />
                    Minimum Width: <strong>22.6 Feet</strong>
                  </p>
                  <p>
                    <FaCheckCircle className="text-success me-2" />
                    Length: <strong>40 Feet</strong>
                  </p>
                  <p className="text-muted mt-2">
                    Designed for comfortable home planning and efficient space
                    utilization.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Road Infrastructure */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">
              Road Infrastructure
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <FaCheckCircle className="text-success me-2" />
                  25-Feet Wide Roads
                </Col>
                <Col md={6}>
                  <FaCheckCircle className="text-success me-2" />
                  30-Feet Wide Roads
                </Col>
              </Row>
              <p className="text-muted mt-2">
                Well-planned road network ensures smooth movement, safety, and
                long-term value.
              </p>
            </Card.Body>
          </Card>

          {/* Ideal For */}
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">
              Ideal For
            </Card.Header>
            <Card.Body>
              {[
                "Immediate home construction",
                "Long-term investment",
                "Rental income planning",
                "Future resale with high appreciation",
              ].map((item, index) => (
                <p key={index}>
                  <FaCheckCircle className="text-success me-2" />
                  {item}
                </p>
              ))}
            </Card.Body>
          </Card>

          {/* Why Choose */}
          <Card className="shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">
              Why Presidium Empire?
            </Card.Header>
            <Card.Body>
              {[
                "Ready-to-move plots",
                "Fully developed infrastructure",
                "Registry & mutation assured",
                "Government-approved project",
                "Prime location near Jewar Airport & expressways",
              ].map((item, index) => (
                <p key={index}>
                  <FaCheckCircle className="text-success me-2" />
                  {item}
                </p>
              ))}

              <p className="mt-3 fw-semibold">
                Presidium Empire offers a rare combination of legal security,
                complete development, and strategic location — making it a smart
                choice under Haryana Shehri Plots Yojana.
              </p>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
}
