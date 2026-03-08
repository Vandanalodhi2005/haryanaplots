import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaUser, FaIdCard, FaFilePdf } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      aadhaarNumber: e.target.aadhaarNumber.value,
      message: e.target.message.value,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: "contact@deendayaljanawasyojna.org",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          aadhaarNumber: formData.aadhaarNumber,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        alert("Message submitted successfully! We'll contact you within 24 hours.");
        e.target.reset();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Email error:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
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
    );
  }
  
  export default Contact;