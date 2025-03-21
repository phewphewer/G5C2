import { Link, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import Droplet from "../../text/Droplet.jsx";
import { useLogout } from "../../../hooks/useLogout.jsx";
import { useAuthContext } from "../../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";

export default function Header({ isOpen }) {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <header
      className={`fixed  ${
        isOpen ? "left-[230px]" : "left-[30px]"
      } top-0 h-[60px] bg-[#0A1A2F]  
    text-[#F7FAFC] flex items-center justify-between  
    transition-all duration-300 ease-in-out w-full`}
    >
      <div>
        <Droplet />
      </div>

      {/* username(logout)/ profiel */}
      {user && (
        <div
          className="mr-[60px] flex gap-3 font-semibold relative"
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className="rounded-md border border-[#0c172e] px-[10px] py-[10px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            {user.username}
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 right-[-10px] bg-[#1E2A3B] rounded-md shadow-lg">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full px-5 py-3 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-5 py-3 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
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
