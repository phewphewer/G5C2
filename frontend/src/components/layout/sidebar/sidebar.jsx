"use client";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-screen bg-[#0C172E] text-[#feffff]
                   transition-transform duration-100 ease-in-out z-[1000]
                   ${isOpen ? "translate-x-0" : "-translate-x-[200px]"}`}
      >
        <ul className="list-none p-0 mt-[50px]">
          <li className="py-[15px] px-[20px] text-[18px] cursor-pointer hover:bg-white/10 hover:rounded-md">
            <Link to="/home/recent_posts">
              <button className="w-full h-full hover:cursor-pointer">
                Home
              </button>
            </Link>
          </li>
          <li className="py-[15px] px-[20px] text-[18px] cursor-pointer hover:bg-white/10 hover:rounded-md">
            <Link to="/dashboard">
              <button className="w-full h-full hover:cursor-pointer">
                Profile
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        className={`h-full  top-0 left-0 w-[56px] fixed border-none text-[#feffff] text-[20px] cursor-pointer z-[1001] transition-all duration-100 ease-in-out focus:outline-none focus:shadow-none focus:border-none -translate-x-[7px] ${
          isOpen ? "left-[220px] top-[15px" : "left-[0px] top-0 "
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </>
  );
}
