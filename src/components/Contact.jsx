import React from "react";
import { FaEnvelope, FaPhoneAlt, FaUser, FaIdCard, FaFilePdf } from "react-icons/fa";
import "./Contact.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch("https://haryanashehriplot-backend.vercel.app/api/contact", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      alert("Message submitted successfully");
      e.target.reset();
    } else {
      alert(data.message || "Submission failed");
    }
  };

  return (
    <>
      <Header />

      <section className="contact-section">
        <div className="contact-overlay">
          <h2 className="contact-title">Connect With Us</h2>
          <p className="contact-subtitle">
            Get complete guidance for Haryana Shehri Plots Yojana
          </p>

          <div className="contact-container">
            {/* Left Form */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-group">
                <label>
                  <FaUser /> Full Name <span>*</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" required />
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
                <input type="email" name="email" placeholder="Enter email ID" required />
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
                <label>
                  <FaFilePdf /> Upload Aadhaar (PDF) <span>*</span>
                </label>
                <input
                  type="file"
                  name="aadhaarPdf"
                  accept="application/pdf"
                  required
                />
                <small>Only PDF allowed (Max 2MB)</small>
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
                Submit Enquiry
              </button>
            </form>

            {/* Right Contact Info */}
            <div className="contact-info">
              <h4>Contact Information</h4>

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
      <Footer />
    </>
    
  );
}

export default Contact;
