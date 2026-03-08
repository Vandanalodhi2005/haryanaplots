import React, { useEffect } from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function PlotRegistration() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "contact@deendayaljanawasyojna.org",
          from_name: form.fullName.value,
          from_email: form.email.value,
          phone: form.phone.value,
          aadhaarNumber: form.aadhaarNumber.value,
          message: form.message.value,
        }
      );

      if (response.status === 200) {
        alert("Registration Submitted Successfully! We'll contact you soon.");
        e.target.reset();
      } else {
        alert("Failed to submit registration. Please try again.");
      }
    } catch (error) {
      console.error("Email error:", error);
      alert("Error submitting registration. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <h2 className="contact-title">Plot Registration</h2>
        <p className="contact-subtitle">
          Haryana Shehri Plots Yojana
        </p>

        <div className="contact-container">
          {/* Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label>
                <FaUser /> Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaPhoneAlt /> Phone Number <span>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaEnvelope /> Email Address <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email ID"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaIdCard /> Aadhaar Number <span>*</span>
              </label>
              <input
                type="text"
                name="aadhaarNumber"
                placeholder="12-digit Aadhaar number"
                pattern="[0-9]{12}"
                maxLength="12"
                required
              />
            </div>

            <div className="form-group">
              <label>Message <span>*</span></label>
              <textarea
                name="message"
                placeholder="Write your query here..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Registration
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h4>Registration Info</h4>

            <div className="info-box">
              <FaEnvelope />
              <span>contact@deendayaljanawasyojna.org</span>
            </div>

            <div className="info-box">
              <FaPhoneAlt />
              <span>+91 8700559249</span>
            </div>

            <p className="info-note">
              Our team will contact you within 24 working hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


