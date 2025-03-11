import React, { useState } from 'react';
// import { FaBars } from "react-icons/fa"; // Import an icon
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/home/recent_posts">
              <button className="w-full h-full hover:cursor-pointer">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <button className="w-full h-full hover:cursor-pointer">
                Profile
              </button>
            </Link>
          </li>
        </ul>
        {/* <button>
          <a
            href="https://ko-fi.com"
            target="_blank"
            className="fixed bottom-10 right-0 font-extrabold text-[1em] text-[#575757] 
              w-auto max-w-[200px] z-50 animate-pulse scale-200"
          > 
            BUY ME A COFFEE
          </a>
        </button> */}
      </div>

      {/* Toggle Button */}
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </>
  );
}
