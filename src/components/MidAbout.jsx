import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import "./MidAbout.css";

function MidAbout() {
  const images = [
    "/gallery/img1.jpg",
    "/gallery/img2.jpeg",
    "/gallery/img3.jpeg",
    "/gallery/img4.jpeg",
    // "/gallery/img5.jpeg",
    // "/gallery/img6.jpeg",
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">
            Presidium Empire – Project Gallery
          </h2>
          <p className="text-muted">
            Actual site images & walkthrough video
          </p>
        </div>

        <Row className="align-items-center">
          {/* LEFT SIDE – IMAGE ALBUM */}
          <Col lg={7} md={12}>
            <Row className="g-4">
              {images.map((img, index) => (
                <Col sm={6} key={index}>
                  <Card className="border-0 folder-card">
                    <div className="folder-layer"></div>

                    <Card.Img
                      src={img}
                      alt={`Project Image ${index + 1}`}
                      className="folder-img"
                    />

                    <div className="folder-label">📁 Project Photos</div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT SIDE – PROFESSIONAL VIDEO */}
          <Col lg={5} md={12} className="mt-4 mt-lg-0">
            <Card className="border-0 video-card shadow-lg">
              <Card.Body>
                <h4 className="fw-bold text-success mb-2">
                  Project Walkthrough
                </h4>

                <p className="text-muted mb-3">
                  Explore Presidium Empire through our official site walkthrough
                  video.
                </p>

                {/* Video Container */}
                <div className="video-wrapper">
                  <video
                    controls
                    poster="/gallery/video-poster.jpg"
                    className="project-video"
                  >
                    <source
                      src="/videos/presidiumV.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Overlay */}
                  <div className="video-overlay">
                    <FaPlayCircle />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MidAbout;
