import PostCard from "../features/posting/PostCard";
import React, { useState } from "react";

export default function PostPage() {
  const [sortBy, setSortBy] = useState("Sort by");

  const handleSort = (sortType) => {};

  return (
    <div className="min-h-screen bg-[#050E1A] text-white pt-17 flex">
      {/* Sorting and filter options */}
      <div className=" ">
        <div className=" flex justify-between items-center p-3 rounded-t-md  space-x-4">
          <div className="flex space-x-5">
            <button
              className="p-2 bg-[#1E3A57] hover:bg-[#172A42] rounded-full border-1 border-[#2D5F8A] hover:text-[]"
              onClick={() => handleSort("Recent")}
            >
              Recent
            </button>
            <button
              className="p-2 bg-[#1E3A57] rounded-full hover:bg-[#172A42] border-1 border-[#2D5F8A] hover:text-[]"
              onClick={() => handleSort("Featured")}
            >
              Featured
            </button>
            <button
              className="p-2 bg-[#1E3A57] rounded-full hover:bg-[#172A42] border-1 border-[#2D5F8A] hover:text-[]"
              onClick={() => handleSort("Popular")}
            >
              Popular
            </button>
          </div>
          <select
            className="p-2  bg-[#1E3A57] rounded border-1 border-[#2D5F8A]"
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
        <div></div>
        <div className="flex">
          <PostCard></PostCard>

          {/* Right - Featured Users */}
          <div className="w-1/4 p-4">
            <div className="bg-[#0A1A2F] p-4 rounded-lg border border-[#F7FAFC]">
              <h2 className="text-center font-bold">Featured</h2>
              <div className="mt-4 space-y-2">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#1F2D50] p-4 rounded-lg border border-[#F7FAFC]"
                  >
                    <p className="text-lg font-bold">Username</p>
                    <div className="w-full h-24 rounded-md mt-2">
                      Lorem, ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
