import React, { useState } from 'react';

export default function PostPage() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Sort by');

  return (
    <div className="min-h-screen bg-[#0D162F] text-white p-6 pt-17 flex flex-col">
      {/* accordion and sort by */}
      <div className="">
        <div className="flex justify-between items-center  p-3 rounded-t-md border-b border-[#D3C3A3] space-x-4">
          <div>
            <button
              className="p-2 bg-[#4F3A2D] rounded hover:bg-[#D3C3A3] border-2 border-[#D3C3A3] hover:text-[]"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            >
              Accordion
            </button>
            {isAccordionOpen && (
              <div className="absolute bg-[#4F3A2D] mt-2 p-2 rounded-md">
                {['Featured', 'Recent', 'Popular'].map((item) => (
                  <button
                    key={item}
                    className="block w-full text-left p-2 hover:bg-[#D3C3A3]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <select
            className="p-2 bg-[#4F3A2D] rounded border border-[#D3C3A3]"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Sort by" disabled>
              Sort by
            </option>
            <option value="Week">Sort by Week</option>
            <option value="Month">Sort by Month</option>
            <option value="Year">Sort by Year</option>
          </select>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Left - Posts */}
          <div className="w-3/4 p-4 space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-[#1F2D50] p-4 rounded-lg border border-[#D3C3A3]"
              >
                <p className="text-lg font-bold">Username</p>
                <div className="w-full h-24 bg-[#A97C50] rounded-md mt-2"></div>
              </div>
            ))}
          </div>
        </div>
        {/* Right - Featured Users */}
        <div className="w-1/4 p-4">
          <div className="bg-[#4F3A2D] p-4 rounded-lg border border-[#D3C3A3]">
            <h2 className="text-center font-bold">Featured</h2>
            <div className="mt-4 space-y-2">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-[#1F2D50] p-4 rounded-lg border border-[#D3C3A3]"
                >
                  <p className="text-lg font-bold">Username</p>
                  <div className="w-full h-24 bg-[#A97C50] rounded-md mt-2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
