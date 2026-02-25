import React from "react";
import "./BankDetails.css";

export default function BankDetails() {
  return (
    <section className="bank-details-section">
      <div className="bank-details-container">
        <div className="bank-header">
          <h3>ALL PAYMENTS SHOULD BE DONE IN FAVOUR OF</h3>
          <h2 className="bank-name">" MA LAXMI GROUP "</h2>
        </div>

        <div className="bank-info-grid">
          <div className="bank-info-item">
            <label>BANK NAME</label>
            <span>:</span>
            <p>IDFC FIRST BANK LTD.</p>
          </div>

          <div className="bank-info-item">
            <label>ACCOUNT TYPE</label>
            <span>:</span>
            <p>CURRENT ACCOUNT</p>
          </div>

          <div className="bank-info-item">
            <label>ACC. HOLDER NAME</label>
            <span>:</span>
            <p>MA LAXMI GROUP</p>
          </div>

          <div className="bank-info-item">
            <label>ACCOUNT NUMBER</label>
            <span>:</span>
            <p>10051908348</p>
          </div>

          <div className="bank-info-item">
            <label>IFSC CODE</label>
            <span>:</span>
            <p>IDFB0020148</p>
          </div>

          <div className="bank-info-item">
            <label>BRANCH</label>
            <span>:</span>
            <p>SHANKAR VIHAR, DELHI- 110092</p>
          </div>
        </div>
      </div>
    </section>
  );
}
