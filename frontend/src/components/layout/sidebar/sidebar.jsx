"use client";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[230px] h-screen bg-[#0A1A2F] border-r-[1px] border-[#172A42] text-[#feffff]
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
        className={`h-full top-0 left-0 w-[30px] fixed border-none text-[#feffff] text-[30px] cursor-pointer z-[1001] transition-all duration-100 ease-in-out focus:outline-none focus:shadow-none focus:border-none -translate-x-[7px] rounded-full ${
          isOpen ? "left-[210px] top-[15px]" : "left-[5px] top-0 bg-transparent"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className=" bg-[#050E1A] rounded-full pl-[8px] pr-[8px] ml-3 border-[1px] border-[#172A42] ">
          {isOpen ? "<" : ">"}
        </label>
      </button>
    </>
  );
}
