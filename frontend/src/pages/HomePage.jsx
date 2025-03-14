"use client";

import { useState } from "react";
import Sidebar from "../components/layout/sidebar/sidebar";
import Header from "../components/layout/header/header";
import MainDisplay from "../components/layout/MainDisplay";
import { BrowserRouter as Router } from "react-router-dom";

export default function HomePage() {
  // Manage sidebar state at the parent level
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-container relative bg-[#050E1A]">
      {/* Pass state and setter to Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Pass sidebar state to Header */}
      <div
        className={`main-content transition-all duration-100 ease-in-out ${
          isSidebarOpen ? "ml-[250px]" : "ml-[50px]"
        }`}
      >
        <Header isOpen={isSidebarOpen} />
        <MainDisplay />
      </div>
    </div>
  );
}
