import React from "react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  

  return (
    <>
      <div className="w-[100%] h-[10vh] border-b-1 border-indigo-800">
        <div className="flex justify-between my-3 mx-5 ">
          <p className="text-3xl text-gray-100 font-extrabold">droplet</p>
          <input
            className="bg-gray-600 text-gray-400 py-3 pr-100 rounded-full"
            type="text"
            value="    🔍 Search droplet"
          />
          <div> 
            <button className="text-[1rem] text-gray-100 rounded-full bg-blue-500 py-3 px-4 mr-2">
              Log In
            </button>
            <button
              onClick={toggleMenu}
              className="text-2xl text-gray-100 hover:text-blue-500 ml-2 font-bold px-3 rounded-full hover:bg-gray-600"
            >
              &#8942; {/* This is the Unicode character for the 3-dot menu */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
