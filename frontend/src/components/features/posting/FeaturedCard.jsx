import React, { useState } from "react";

export default function FeaturedPost({
  name = "John Doe",
  time = "2 hours ago",
  content = "Just finished working on an amazing project with the team! Really proud of what we've accomplished over the last few weeks. Looking forward to sharing more details soon. #teamwork #productivity",
}) {
  const [isExpanded, setIsExpanded] = useState(false); // State to track expanded/collapsed state

  // Function to toggle between expanded and collapsed states
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Truncate the content if it's too long
  const maxLength = 100; // Maximum characters to show before truncating
  const truncatedContent =
    content.length > maxLength && !isExpanded
      ? `${content.slice(0, maxLength)}...`
      : content;

  return (
    <div className="bg-[#0A1A2F] text-white rounded-lg p-5 border border-[#2D5F8A] shadow-lg mb-5">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <img
          src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
          alt="User Avatar"
          className="w-auto h-10 rounded-full border-2 border-white"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-400">{time}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mt-3 text-xs">
        {truncatedContent} {/* Show truncated or full content based on state */}
      </p>

      {/* "See More" Button */}
      {content.length > maxLength && ( // Only show the button if content is long
        <button
          onClick={toggleExpand}
          className="mt-2 text-[#CBD5E1] text- xs hover:text-[#F7FAFC] text-xs cursor-pointer"
        >
          {isExpanded ? "See Less" : "See More"} {/* Toggle button text */}
        </button>
      )}
    </div>
  );
}
