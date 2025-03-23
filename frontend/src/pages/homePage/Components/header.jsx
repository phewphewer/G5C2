import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Droplet from "../../../components/text/Droplet.jsx";
import { useLogout } from "../../../hooks/useLogout.jsx";
import { useAuthContext } from "../../../hooks/useAuthContext.jsx";

export default function Header({ isOpen }) {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();
  const { logout } = useLogout();
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionRef = useRef(null);

  const handleClick = () => {
    logout();
  };
  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target)
      ) {
        setIsAccordionOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed  ${
        isOpen ? "left-[230px]" : "left-[30px]"
      } top-0 h-[60px] bg-[#0A1A2F]  
    text-[#F7FAFC] flex items-center justify-between  
    transition-all duration-300 ease-in-out w-full border-b-1 z-15 border-[#172A42] shadow-[#001c34] shadow-md`}
    >
      <div>
        <Droplet />
      </div>

      {/* username(logout)/ profile*/}
      {user && (
        <div
          className="flex justify-end items-center relative right-0 top-0 h-full font-semibold z-[200]"
          ref={accordionRef}
        >
          <div className="flex justify-end items-center h-full">
            {" "}
            {/* ENCASES EVERYTHING */}
              <button 
              className={`absolute flex items-center pl-10 w-100 h-[59px] bg-[#006a88] hover:bg-red-600 hover:text-[#0c172e] transition duration-600 ease-in-out hover:cursor-pointer
                  ${isAccordionOpen ? "translate-x-0" : "translate-x-[75%]"}`}
              style={{
                clipPath: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              onClick={handleClick}>Logout</button>
            {/* ENCASES PROFILE */}
            <button
              className={`absolute flex items-center pl-10 w-75 h-[59px] bg-[#0096bf] transition duration-600 ease-in-out hover:cursor-pointer
              ${isAccordionOpen ? "translate-x-0" : "translate-x-[75%]"}`}
              style={{
                clipPath: "polygon(9% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              onClick={() => navigate("/dashboard")}
            >
              Profile
            </button>
            <button
              className={`absolute flex items-center pl-10 pr-10 px-5 py-5 h-[59px] transition duration-600 ease-in-out overflow-hidden hover:cursor-pointer
              ${
                isAccordionOpen ? "bg-[#F7FAFC] text-[#0c172e]" : "bg-[#00c8ff]"
              }`}
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              onClick={toggleAccordion}
            >
              {user.username}
            </button>
          </div>
        </div>
      )}
      {!user && (
        <div className="mr-[60px] flex gap-3 font-semibold">
          <button
            onClick={() => navigate("/auth/login")}
            className="rounded-md border border-[#0c172e] px-[10px] py-[5px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            Log-in
          </button>
          <button
            onClick={() => navigate("/auth/sign-up")}
            className="rounded-md border border-[#0c172e] px-[10px] py-[5px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
}
