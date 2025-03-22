import React, { useState } from "react";

export default function FeaturedPost({
  name = "John Doe",
  time = "2 hours ago",
  content = "Just finished working on an amazing project with the team! Really proud of what we've accomplished over the last few weeks. Looking forward to sharing more details soon. #teamwork #productivity",
}) {
  const [isExpanded, setIsExpanded] = useState(false); // expand track see more ulit

  // expand see more
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate ng content pag magsesee more
  const maxLength = 100; // 100 character maxi
  const truncatedContent =
    content.length > maxLength && !isExpanded
      ? `${content.slice(0, maxLength)}...`
      : content;

  return (
    <div className="bg-[#0A1A2F] text-white z-[0] rounded-lg p-5 shadow-lg mb-5 hover:border-[#374151] border-[#1F2937] border-1">
      {/* FEATURE HEADER PO */}
      <div className="flex items-center space-x-3">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>

      {/* Post Content pag hindi naka see more*/}
      <p className="mt-3 text-xs">{truncatedContent}</p>

      {/* see more section mga boss */}
      {content.length > maxLength && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-[#CBD5E1] text- xs hover:text-[#F7FAFC] text-xs cursor-pointer"
        >
          {isExpanded ? "See Less" : "See More"} {/* button ng see more */}
        </button>
      )}
    </div>
  );
}
