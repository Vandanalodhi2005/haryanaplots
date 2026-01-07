import React from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const links = [
  { title: "MASTER PLAN", file: "/pdfs/master-plan.pdf" },
  { title: "NOC CERTIFICATE", file: "/pdfs/noc-certificate.pdf" },
  { title: "DTCP APPROVAL", file: "/pdfs/dtcp-approval.pdf" },
  { title: "PROJECT LAYOUT", file: "/pdfs/project-layout.pdf" },
  { title: "PAYMENT PLAN", file: "/pdfs/payment-plan.pdf" },
  { title: "PROJECT BROCHURE", file: "/pdfs/project-brochure.pdf" },
];

export default function RightSidebar() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="text-success mb-3 fw-bold">
          DOWNLOAD SECTION
        </h5>

        {links.map((item, i) => (
          <p key={i} className="mb-2">
            <FaCheckCircle className="text-success me-2" />
            {item.title} —{" "}
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger fw-semibold text-decoration-none"
            >
              CLICK HERE
            </a>
          </p>
        ))}
      </Card.Body>
    </Card>
  );
}
