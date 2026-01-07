import React from "react";
import { Card } from "react-bootstrap";

export default function HeroSection() {
  return (
    <Card className="border-0 text-white position-relative">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-100"
        style={{
          height: "500px",
          objectFit: "cover"
        }}

        // /banner-video.mp4
      >
        <source src="/videos//banner-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <Card.ImgOverlay className="d-flex flex-column justify-content-center bg-dark bg-opacity-50 p-4">
        <h2 className="fw-bold text-white">
          Haryana Shehri Plot Yojana
        </h2>

        <p className="fw-semibold text-white">
          Under Government of Haryana <br /> NOC Approved
          Affordable Plots.
        </p>
      </Card.ImgOverlay>

    </Card>
  );
}
