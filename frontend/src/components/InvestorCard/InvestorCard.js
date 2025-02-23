import React from "react";
import "./InvestorCard.css";

function InvestorCard({ investor }) {
  return (
    <div className="card">
      <img src={investor.image} alt={investor.name} />
      <h3>{investor.name}</h3>
      <p>{investor.description}</p>
      <button className="view-holdings">View Holdings</button>
    </div>
  );
}

export default InvestorCard;
