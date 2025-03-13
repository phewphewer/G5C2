import React, { useState } from "react";

export default function MainDisplay({ isOpen }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort by");

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div
      className={`main-content ${
        isOpen ? "shifted" : ""
      } bg-[#283D55] min-h-screen p-6`}
    >
      <div className="w-full text-white flex justify-center p-4 pt-10">
        <div className="w-full max-w-2xl space-y-4">
          {/* Accordion/Dropdown */}
          <div className="bg-[#1F2D50] p-2 rounded-lg flex justify-between items-center shadow-md">
            <div>
              <button
                className="w-auto h-auto text-left text-white p-2 rounded-md hover:bg-[#A97C50] transition"
                onClick={toggleAccordion}
                aria-label="Toggle accordion"
              >
                Pindutin mo to
              </button>
              {isAccordionOpen && (
                <div className="flex flex-col space-y-2 mt-2 bg-[#4F3A2D] p-2 rounded-md shadow-md">
                  {["Featured", "Popular", "Recent"].map((section) => (
                    <button
                      key={section}
                      className="w-full text-center text-white p-2 rounded-md hover:bg-[#D3C3A3] transition"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-4">
              <select
                className="text-white p-2 rounded-md w-22 bg-[#4F3A2D] shadow-md border border-[#D3C3A3]"
                value={sortBy}
                onChange={handleSortChange}
                aria-label="Sort by"
              >
                <option value="Sort by" disabled>
                  Sort by
                </option>
                <option value="Week">Sort by Week</option>
                <option value="Month">Sort by Month</option>
                <option value="Year">Sort by Year</option>
              </select>
            </div>
          </div>

          {/* Post */}
          <div className="space-y-6 mt-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[#1F2D50] p-4 rounded-lg shadow-md border border-[#D3C3A3] transition hover:shadow-lg"
              >
                {/* Profile */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-[#4F3A2D] rounded-full border border-[#D3C3A3]"></div>
                </div>
                {/* Placeholder */}
                <div className="w-full h-24 bg-[#A97C50] rounded-md border border-[#D3C3A3]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
