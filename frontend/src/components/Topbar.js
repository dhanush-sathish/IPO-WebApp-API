import React from "react";
import "../styles/Topbar.css";
import { FaSearch } from "react-icons/fa";

const Topbar = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="search-container">
      <label className="search-label">Search by Company Name & IPO Status</label>
        <input
          type="text"
          placeholder="Search here..."
          className="search-bar"
          onChange={(e) => onSearch(e.target.value)} // Call search function on input change
        />
        <span><FaSearch className="search-icon" /></span>
      </div>
    </header>
  );
};

export default Topbar;
