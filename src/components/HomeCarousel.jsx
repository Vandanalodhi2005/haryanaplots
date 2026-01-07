import React from "react";
import { Carousel, Container } from "react-bootstrap";

const slides = [
  {
    img: "/slide3.jpg",
    title: "Haryana Shehri Plot Yojana",
    description: "Affordable Housing & Plotting Under Government of Haryana",
  },
  {
    img: "/carousel/slide1.jpeg",
    title: "Registrations Now Open",
    description: "Apply Today for HSPY Approved Residential Plots",
  },
  {
    img: "/carousel/slide2.jpg",
    title: "Presidium Empire – Near Jewar International Airport",
    description: "Solra Village, Palwal, Haryana",
  },
];

function HomeCarousel() {
  return (
<Container className="my-4">
      <Carousel fade interval={4500} pause="hover">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            {/* Image */}
            <img
              className="d-block w-100 img-fluid rounded"
              src={slide.img}
              alt={slide.title}
              style={{
                height: "420px",       // reduced height
                objectFit: "cover",    // maintains quality
              }}
            />

            {/* Caption */}
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
              <h5 className="fw-bold">{slide.title}</h5>
              <p className="mb-0">{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default HomeCarousel;
