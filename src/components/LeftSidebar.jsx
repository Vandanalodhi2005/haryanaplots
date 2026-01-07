import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function LeftSidebar() {
  const navigate = useNavigate();

  // 👉 SET STATIC TARGET DATE HERE
  const targetDate = new Date("2026-01-10T23:59:59"); // YYYY-MM-DD

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navigateToRegistrationPage = () => {
    navigate("/plotregistration");
  };

  return (
    <>
      {/* Registration Card */}
      <Card className="mb-3 shadow-sm">
        <Card.Body className="text-center">
          <h5 className="fw-bold text-success">Pay Just ₹11,000/-</h5>
          <p className="mb-3">For Registration</p>
          <Button
            variant="success"
            className="fw-bold"
            onClick={navigateToRegistrationPage}
          >
            REGISTRATION OPEN
          </Button>
        </Card.Body>
      </Card>

      {/* Countdown Card */}
      <Card className="mb-3 shadow-sm text-center">
        <Card.Body>
          <h6 className="fw-bold text-danger mb-3">
            Registration Closes In
          </h6>

          <div className="d-flex justify-content-center gap-3">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Minutes" value={timeLeft.minutes} />
            <TimeBox label="Seconds" value={timeLeft.seconds} />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

/* Small reusable component */
function TimeBox({ label, value }) {
  return (
    <div>
      <h5 className="fw-bold">{String(value).padStart(2, "0")}</h5>
      <small className="text-muted">{label}</small>
    </div>
  );
}
