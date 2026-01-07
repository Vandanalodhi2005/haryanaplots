import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function SocialActions() {
  return (
    <div
      className="position-fixed d-flex flex-column gap-3"
      style={{ right: "20px", bottom: "120px", zIndex: 1050 }}
    >
      {/* Call */}
      <a
        href="tel:+918700559249"
        className="btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center"
        style={{ width: "55px", height: "55px" }}
        title="Call Now"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918700559249"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-circle shadow d-flex align-items-center justify-content-center"
        style={{ width: "55px", height: "55px" }}
        title="WhatsApp Chat"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}
