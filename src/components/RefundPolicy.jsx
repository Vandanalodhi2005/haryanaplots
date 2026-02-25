import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function RefundPolicy() {
  return (
    <>
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          {/* Intro */}
          <p className="text-muted mb-4">
            At <strong>Haryana Shehri Plots Yojna</strong>, we strive to ensure
            complete transparency and satisfaction for every customer exploring
            affordable housing opportunities under our plotted development
            schemes. We understand the significance of your investment and are
            committed to providing a fair and clear refund policy.
          </p>

          {/* Booking Amount Refund Policy */}
          <h3 className="fw-bold mb-3">Booking Amount Refund Policy</h3>
          <ol className="mb-4">
            <li className="mb-3">
              Token / Booking Amount once paid is considered as confirmation of
              your interest and is <strong>Refundable</strong> under normal
              circumstances.
            </li>

            <li>
              However, if there is a situation where:
              <ul className="mt-2">
                
                <li>
                  The plot / unit booked becomes unavailable due to any internal
                  or legal issue
                </li>
              </ul>
              <p className="mt-2">
                Then <strong>100% of the booking amount</strong> shall be
                refunded without any deduction.
              </p>
            </li>
          </ol>

          {/* Cancellation Requests */}
          <h3 className="fw-bold mb-3">Cancellation Requests</h3>
          <ul className="mb-4">
            <li className="mb-2">
              All cancellation requests must be made{" "}
              <strong>in writing</strong> via email or official communication
              channels.
            </li>
            <li className="mb-2">
              Once the request is received, our team will verify the booking
              details and initiate the process.
            </li>
            <li>
              If cancellation is allowed as per agreement terms, applicable
              deductions (if any) will be informed prior to processing the
              refund.
            </li>
          </ul>

          {/* Refund Timeline */}
          <h3 className="fw-bold mb-3">Refund Timeline</h3>
          <ul className="mb-4">
            <li className="mb-2">
              Approved refunds will be processed within{" "}
              <strong>2 to 3 working days</strong> from the date of acceptance
              of the cancellation request.
            </li>
            <li>
              Refunds will be made through <strong>bank transfer</strong> to the
              account from which the payment was originally received, or as
              mutually agreed.
            </li>
          </ul>

          
        </Col>
      </Row>
    </Container>
    {/* Footer provided by Layout */}
    </>
  );
}
