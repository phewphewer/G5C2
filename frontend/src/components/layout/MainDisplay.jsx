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
    <div className={`main-content ${isOpen ? "shifted" : ""}`}>
      <div className="w-full bg-black text-white flex justify-center p-4 pt-10">
        <div className="w-full max-w-2xl space-y-4">
          {/* Accordion/ drop down */}
          <div className="bg-transparent p-2 rounded-lg flex justify-between items-center">
            <div>
              <button
                className="w-auto h-auto text-left text-white p-2 rounded-md hover:bg-gray-500"
                onClick={toggleAccordion}
                aria-label="Toggle accordion"
              >
                pindutin moto
              </button>
              {isAccordionOpen && (
                <div className="flex flex-col space-y-2 mt-2 bg-gray-900 p-2 rounded-md">
                  {["Featured", "Popular", "Recent"].map((section) => (
                    <button
                      key={section}
                      className="w-full text-center text-white p-2 rounded-md hover:bg-gray-700"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-4">
              <select
                className="text-white p-2 rounded-md w-22 bg-gray-900"
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
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-lg shadow-md border border-white"
            >
              {/* Profile */}
              <div className="flex items-center space-x-3 mb-1">
                <div className="w-10 h-10 bg-gray-500 rounded-full border border-white"></div>
              </div>

              {/* Placeholder */}
              <div className="h-10 bg-gray-700 rounded-md border border-white"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
