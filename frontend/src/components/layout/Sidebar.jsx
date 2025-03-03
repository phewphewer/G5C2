// SIDEBAR NAVIGATION
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <div className='flex float left-0 fixed'>
      <div className="w-[20%] h-[90vh] border-r-1 border-indigo-800 flex items-center justify-center flex-col">
        <button className="py-2 px-20  bg-gray-600 rounded-md flex justify-start items-center">
          <Link to="./home/recent_posts">Home</Link>
        </button>
        <button className="py-2 px-20 hover:bg-gray-600 rounded-md">
          <Link to="./home/popular_posts">Popular</Link>
        </button>
      </div>
      </div>
    </>
  );
}
