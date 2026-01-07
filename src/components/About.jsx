"use client";

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MidPageAbout from "./MidPageAbout.jsx";
import MidAbout from "./MidAbout.jsx";

function About() {
  return (
    <>
      <Header />
      <section style={{ background: "#f6faf6", padding: "60px 0" }}>
        <Container>
          <Row className="align-items-center">
            {/* Left Content */}
            <Col md={6}>
              <h2
                style={{
                  color: "#0aa44a",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                Haryana Shehri Plots Yojna Plots Overview
              </h2>

              <p style={{ color: "#333", lineHeight: "1.8" }}>
                Haryana Shehri Plots Yojana is a flagship urban housing
                initiative of the Government of Haryana, introduced to promote
                planned residential development and affordable plot ownership in
                approved urban areas of the state. Presidium Empire is a premium
                residential plotting project developed under the Haryana Shehri
                Plots Yojana, located at Solra Village, District Palwal
                (Haryana), in close proximity to the Noida International Jewar
                Airport.
              </p>

              <p style={{ color: "#333", lineHeight: "1.8" }}>
                Investing in Haryana Shehri Plots Yojana plots presents a
                prudent and secure opportunity, offering promising returns with
                minimal risk. These plots are fully developed and equipped with
                appealing amenities.
              </p>

              {/* <p style={{ color: "#333", lineHeight: "1.8" }}>
              Under the DDJAY policy of the Haryana government, separate
              registration is allowed along with a streamlined process for
              constructing additional floors. These features collectively make
              DDJAY plots a valuable residential asset—ideal for comfortable
              living, a serene holiday retreat, or a lucrative source of income
              through construction and resale.
            </p> */}
            </Col>

            {/* Right Image */}
           <Col md={6} className="text-center">
  <div
    style={{
      borderRadius: "14px",
      overflow: "hidden",
      boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
      transition: "transform 0.4s ease",
    }}
    className="about-image-wrapper"
  >
    <Image
      src="/carousel/about-ddjay.jpg"
      alt="Haryana Shehri Plots Yojana Project"
      fluid
      style={{
        width: "100%",
        height: "420px",
        objectFit: "cover",
      }}
    />
  </div>
</Col>

          </Row>
        </Container>
        <MidAbout />
        <MidPageAbout />
      </section>
      <Footer />
    </>
  );
}

export default About;
