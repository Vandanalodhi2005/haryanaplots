import React from "react";
import "./PaymentPlan.css";

export default function PaymentPlan() {
  const plans = [
    {
      area: "100",
      registration: "₹21,000",
      twentyPercent: "₹4,40,000",
      remaining: "₹17,60,000",
      emi: "₹1,76,000",
      total: "₹22,00,000",
    },
    {
      area: "200",
      registration: "₹31,000",
      twentyPercent: "₹8,80,000",
      remaining: "₹35,20,000",
      emi: "₹3,52,000",
      total: "₹44,00,000",
    },
  ];

  return (
    <section className="payment-section">
      <div className="container">
        <h2 className="payment-title">Payment Plan</h2>

        <div className="table-wrap">
          <table className="payment-table">
            <thead>
              <tr>
                <th>Area in (Sq. yd.)</th>
                <th>Registration Amount</th>
                <th>20% Payment Within 5 Days</th>
                <th>Remaining 80% (10 EMI Plan)</th>
                <th>Monthly EMI (10 Months)</th>
                <th>Total Cost</th>
              </tr>
            </thead>

            <tbody>
              {plans.map((p) => (
                <tr key={p.area}>
                  <td data-label="Area">{p.area}</td>
                  <td data-label="Registration">{p.registration}</td>
                  <td data-label="20% Payment">{p.twentyPercent}</td>
                  <td data-label="Remaining">{p.remaining}</td>
                  <td data-label="EMI">{p.emi}</td>
                  <td data-label="Total">{p.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
