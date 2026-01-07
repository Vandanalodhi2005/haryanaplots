import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const benefitsLeft = [
  "✈️ Strategically located near Noida International Airport Jewar, offering excellent regional and international connectivity.",

"🛣️ Just 2 km from Yamuna Expressway, providing seamless access to Noida, Greater Noida, Agra, and Delhi-NCR.",

"🛣️ Only 900 meters from Greenfield Expressway, ensuring fast and smooth intercity travel.",

"🎬 7–8 km from Noida International Film City, a major upcoming employment and entertainment hub.",

"🌆 Well-connected to Noida, Greater Noida, Faridabad, and Delhi, making daily commuting convenient.",

"🚉 Easy access to nearby railway stations and public transport, supporting hassle-free travel.",
];

const benefitsRight = [
  "🏛️ Strategically located in a government-planned growth corridor, ensuring long-term development and employment opportunities driven by nearby industrial and infrastructure projects.",

"🏥 Access to well-established healthcare facilities in the surrounding region, ensuring quality medical services for residents and families.",

"🏫 Availability of reputed educational institutions in nearby areas, supporting quality education from primary to higher levels.",

"🛍️ Proximity to approved commercial, retail, and recreational zones, offering convenient access to daily necessities, shopping, and leisure activities.",

"📈 Enhanced growth potential under Haryana government development policies, making the project suitable for both residential use and secure investment.",
];

function BenefitsOverview() {
  return (
    <>
      {/* ================= Benefits Section ================= */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center text-success fw-bold mb-4">
            Haryana shehri Plots Yojna – Plot Benefits
          </h2>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  {benefitsLeft.map((item, index) => (
                    <p key={index} className="d-flex align-items-start mb-3">
                      <FaCheckCircle className="text-success me-2 mt-1" />
                      <span>{item}</span>
                    </p>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  {benefitsRight.map((item, index) => (
                    <p key={index} className="d-flex align-items-start mb-3">
                      <FaCheckCircle className="text-success me-2 mt-1" />
                      <span>{item}</span>
                    </p>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BenefitsOverview;
