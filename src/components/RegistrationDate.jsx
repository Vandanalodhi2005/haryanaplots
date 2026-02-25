import React from "react";
import "./RegistrationDate.css";

export default function RegistrationDate() {
  return (
    <>
    <section className="regdate-section">
      <div className="regdate-top">
        <h3>33% plots are reserved for government employees and women</h3>
        <a href="/plotregistration" className="reg-cta">Registration Online</a>
      </div>

      <div className="regdate-boxes">
        <div className="box box-blue">
          <h4>Registration Start Date</h4>
          <p>23rd February 2026 (Monday) 09:00 AM</p>
        </div>

        <div className="box box-green">
          <h4>Last Date of Registration</h4>
          <p>14th March 2026 (Saturday) 23:59 PM</p>
        </div>

        <div className="box box-red">
          <h4>Allocation Date</h4>
          <p>18th March 2026 (Thursday) 17:00 PM</p>
        </div>
      </div>
    </section>
    </>
    
  );
}
