import React, { useState } from "react";
// import { FaBars } from "react-icons/fa"; // Import an icon
import "./sidebar.css";

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </>
  );
}
