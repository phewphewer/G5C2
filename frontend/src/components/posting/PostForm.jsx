import React, { useState, useEffect } from 'react';

export default function PostForm() {

  const handlePostSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="w-full bg-[#2987C3] p-6 shadow-md rounded-lg">
        <div className="space-y-4">
          {/* User Profile Section */}
          <div className="flex items-center">
              <h3 className="font-bold text-[120%] text-[#30bffc]">
                You
              </h3>
          </div>
          {/* Post Content */}
          <form
          onSubmit={handlePostSubmit}
          >
            <textarea
              type="text"
              name=""
              id=""
              // value=""
              // onChange={}
              placeholder="what's on your mind?"
              className="placeholder:italic w-full h-30 my-5 rounded-md border indent-2 pt-1 overflow-y-scroll"
            />
            <div className='flex justify-end'>
              <button type="submit" className="rounded-md border border-[] font-extrabold flex justify-center items-center bg-blue-800 w-20 hover:cursor-pointer">
              Ripple 
            </button>
            </div>
            
          </form>

          {/* Action Buttons */}
        </div>
      </div>
    </>
  );
}
