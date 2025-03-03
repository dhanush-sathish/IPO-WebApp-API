import React, { useState, useEffect } from "react";
import { FaBars, FaChartBar, FaShoppingCart, FaAlignLeft, FaCommentDots, FaCog, FaDatabase, FaUser, FaQuestionCircle } from "react-icons/fa";
import "./Menu.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Open by default in desktop view

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-toggle")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="heading-container">
          <div id="heading_bg"><span id="heading_text">BF</span></div>
          <span id="heading">Bluestock Fintech</span>
        </div>
        <hr />
        <ul className="menu-list">
          <h6>MENU</h6>
          <li><FaChartBar className="menu-icon" /> <span>Dashboard</span></li>
          <li><FaShoppingCart className="menu-icon" /> <span>Manage IPO</span></li>
          <li><FaAlignLeft className="menu-icon" /> <span>IPO Subscription</span></li>
          <li><FaCommentDots className="menu-icon" /> <span>IPO Allotment</span></li>
          <br></br>
          <h6>OTHERS</h6>
          <li><FaCog className="menu-icon" /> <span>Settings</span></li>
          <li><FaDatabase className="menu-icon" /> <span>API Manager</span></li>
          <li><FaUser className="menu-icon" /> <span>Accounts</span></li>
          <li><FaQuestionCircle className="menu-icon" /> <span>Help</span></li>
        </ul>
      </aside>

      {isOpen && window.innerWidth <= 768 && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Menu;
