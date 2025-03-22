"use client";
import { useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactInfoOpen, setIsContactInfoOpen] = useState(false)
  const [isSupportUsOpen, setIsSupportUsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleAbout = () => {
    setIsAboutOpen((prev) => !prev)
  }
  const toggleContact = () => {
    setIsContactInfoOpen((prev) => !prev)
  }
  const toggleSupport = () => {
    setIsSupportUsOpen((prev) => !prev)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsAboutOpen(false)
        setIsContactInfoOpen(false)
        setIsSupportUsOpen(false)
      }
    }
    // Only add the event listener if the sidebar is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[230px] h-screen bg-[#0A1A2F] border-r-[1px] border-[#172A42] text-[#F7FAFC]
                   transition-transform duration-100 ease-in-out z-[1000]
                   ${isOpen ? "translate-x-0" : "-translate-x-[200px]"}`}
                   ref={dropdownRef}
      >
        <ul className="list-none p-0 mt-[50px]">
          <li className="py-[15px] px-[20px] text-[18px] cursor-pointer text-[#CBD5E1] hover:bg-white/10 hover:rounded-md hover:text-[#F7FAFC]">
            <Link to="/home">
              <button className="w-full h-full hover:cursor-pointer">
                Home
              </button>
            </Link>
          </li>
          <li className=" py-[15px] px-[20px] text-[18px] cursor-pointer text-[#CBD5E1] hover:bg-white/10 hover:rounded-md hover:text-[#F7FAFC]">
            <button
              className="w-full h-full hover:cursor-pointer "
              onClick={toggleAbout}
            >
              About
            </button>
            {isAboutOpen && (
              <div className="mt-2 p-4 bg-[#1A2B44] rounded-md text-[#F7FAFC] overflow-y-auto max-h-[100px] custom-scrollbar">
                <p className=" text-sm font-semibold italic">
                  Droplet is an open forum for all accepting all valid opinions and topics, a hub for communication, a stage to ripple discussions
                </p>
              </div>
            )}
          </li>
          <li className="py-[15px] px-[20px] text-[18px] cursor-pointer text-[#CBD5E1] hover:bg-white/10 hover:rounded-md hover:text-[#F7FAFC]">
            <button 
            className="w-full h-full hover:cursor-pointer"
            onClick={toggleContact}
            >
              Contact Us
            </button>
            {isContactInfoOpen && (<div className="mt-2 p-4 bg-[#1A2B44] rounded-md text-[#F7FAFC] overflow-y-auto max-h-[100px] custom-scrollbar">
                <p className=" text-sm">
                drizzleCo@gmail.com
                </p>
              </div>
            )} 
          </li>
          <li className="py-[15px] px-[20px] text-[18px] cursor-pointer text-[#CBD5E1] hover:bg-white/10 hover:rounded-md hover:text-[#F7FAFC]">
            <button
              className="w-full h-full hover:cursor-pointer"
              onClick={toggleSupport}
            >
              Support Us
            </button>
            {isSupportUsOpen && (<div className="mt-2 p-4 bg-[#1A2B44] rounded-md text-[#F7FAFC] overflow-y-auto max-h-[100px] custom-scrollbar">
              <div className="flex text-[0.80rem] justify-around">
            <a
              href="https://ko-fi.com"
              target="_blank"
              className="font-extrabold"
            >
              BUY ME A{" "}
              <span className="text-amber-800 hover:text-amber-700">
                COFFEE
              </span>
            </a>
          </div>
              </div>
            )} 
          </li>
        </ul>
        <div className="w-full flexbox flex-wrap fixed bottom-2 left-0">
          
          <div className="text-sm flex justify-around text-gray-500">
            <Link to="../feedback_form">
              <button>
                  give us your feedback{" "}
                  <span className="text-blue-700 hover:text-blue-400">
                    here
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`h-screen top-0 left-0 bottom-0 w-[30px] fixed border-none text-[#feffff] text-[30px] cursor-pointer z-[1001] transition-all duration-100 ease-in-out focus:outline-none focus:shadow-none focus:border-none -translate-x-[7px] hover:cursor-pointer hover:bg-blue-400 ${
          isOpen ? "left-[210px] top-[15px]" : "left-[5px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" bg-[#050E1A] rounded-full pl-[8px] pr-[8px] ml-3 border-2 border-[#172A42] hover:cursor-pointer hover:bg-blue-400">
          {isOpen ? "<" : ">"}
        </span>
      </button>
    </>
  );
}
