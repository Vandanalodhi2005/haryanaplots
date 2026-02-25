import React from "react";
import { Card } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div>
      {/* Clean Video Section */}
      <Card className="border-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-100"
          style={{
            height: "500px",
            objectFit: "cover",
            display: "block"
          }}
        >
          <source src="/videos/banner-video.mp4?v=1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Card>

      {/* Text Section Below Video */}
      <div className="bg-light py-4 px-3 text-center border-bottom border-success border-3">
        <h2 className="fw-bold text-success mb-2">
          Haryana Shehri Plot Yojana
        </h2>
        <p className="fw-semibold text-dark mb-0">
          Under Government of Haryana <br /> NOC Approved
          Affordable Plots.
        </p>
      </div>
    </div>
  );
}
