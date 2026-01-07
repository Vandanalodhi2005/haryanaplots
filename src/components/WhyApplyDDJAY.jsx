import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function WhyApplyDDJAY() {
  return (
    <section className="py-5 bg-white">
      <Container>
        {/* Heading */}
        <h2 className="text-center fw-bold text-success mb-4">
          Haryana Shehri plots Yojna Plots Overview
        </h2>

        {/* Overview Text */}
        <p className="text-muted text-center mb-5 px-md-5">
          Presidium Empire is a premium residential plotted development launched
          under the Haryana Shehri Plots Yojana, a flagship urban housing
          initiative of the Government of Haryana. <br />
          Strategically located in Solra Village, District Palwal (Haryana),
          near the Noida International Jewar Airport, Presidium Empire offers
          government-approved residential plots with strong growth potential and
          secure ownership.
          <br />
          With DTCP approval and NOC clearance, this project is an ideal choice
          for both end-users and long-term investors seeking safety,
          appreciation, and modern infrastructure.
        </p>

        {/* Why Apply Section */}
        <h2 className="text-center fw-bold text-success mb-5">
          Why Choose Presidium Empire – Haryana Shehri Plots Yojana
        </h2>

        <Row className="gy-4">
          {/* Left Column */}
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Secure & Low-Risk Investment:</strong>{" "}
                  Government-backed Presidium Empire is a government-regulated
                  and DTCP-approved project, ensuring complete transparency,
                  legal security, and peace of mind.
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Modern Infrastructure & Amenities:</strong> Located in
                  developed areas The project is planned with: Wide internal
                  roads Proper drainage & utilities Green and open spaces Easy
                  access to schools, hospitals, markets & daily needs
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Easy Registration & Ownership:</strong> Located in a
                  rapidly developing zone: <br />
                  ✈️ Near Noida International Jewar Airport
                  <br />
                  🛣️ 2 km from Yamuna Expressway
                  <br />
                  🛣️ 900 meters from Greenfield Expressway
                  <br />
                  🎬 7–8 km from Noida International Film City
                  <br />
                  This connectivity makes Presidium Empire a high-growth
                  investment corridor.
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Flexible Payment Options:</strong> Multiple approved
                  and buyer-friendly payment plans are available, making plot
                  ownership simple and accessible.
                </span>
              </li>
            </ul>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <ul className="list-unstyled">
              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Government Benefits & Transparency:</strong> Regulated
                  development under Haryana policies Clear approval framework
                  Reduced risk compared to non-approved projects
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Build Your Dream Home:</strong> Enjoy the freedom to:
                  Design your home as per your lifestyle Build for self-use or
                  rental income Plan future expansion
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>Peace of Mind:</strong> Invest confidently in a
                  regulated, transparent, and government-monitored project.
                </span>
              </li>

              <li className="d-flex mb-3">
                <FaCheckCircle className="text-success mt-1 me-3" />
                <span>
                  <strong>
                    Presidium Empire – Invest Today, Secure Tomorrow:
                  </strong>{" "}
                  Presidium Empire is more than just a plot — it is a
                  future-ready opportunity under Haryana Shehri Plots Yojana,
                  offering connectivity, legality, and long-term value.
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyApplyDDJAY;
