import React, { useState, useEffect } from 'react';

export default function PostForm() {

  return (
    <>
      <div className="w-full bg-[#0C172E] p-6 shadow-md rounded-lg">
      <div className="space-y-4">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="font-semibold text-[#E4D8BE]">Alex Johnson</h3>
            <p className="text-xs text-[#D09966]">Posted 2 hours ago</p>
          </div>
        </div>
        {/* Post Content */}
        <div className="post-content">
          <p className="text-[#E4D8BE]">
          </p>
        </div>
        {/* Action Buttons */}
      </div>
    </div>
    </>
  );
}
