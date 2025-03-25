"use client";

import { useState, useRef } from "react";
import Sidebar from "./Components/sidebar";
import Header from "./Components/header";
import MainDisplay from "./Components/MainDisplay";
import { BrowserRouter as Router } from "react-router-dom";

export default function HomePage() {
    // Manage sidebar state at the parent level
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="app-container relative bg-[#050E1A]  custom-scrollbar">
            {/* Pass state and setter to Sidebar */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Pass sidebar state to Header */}
            <div
                className={`main-content transition-all duration-500 ease-in-out ${
                    isSidebarOpen ? "ml-[250px]" : "ml-[50px]"
                }`}
            >
                <Header isOpen={isSidebarOpen} />
                <div className="min-w-screen min h-screen bg-[#050E1A]">
                    <MainDisplay />
                </div>
            </div>
        </div>
    );
}
