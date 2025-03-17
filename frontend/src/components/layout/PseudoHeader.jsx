import React from 'react';
import { Link } from 'react-router-dom';
import Droplet from '../text/Droplet';

export default function PseudoHeader() {
  return (
    <>
      {/* PSEUDO HEADER start */}
      <div className="fixed left-0 top-0 right-0 flex w-full h-[60px] bg-[#0A1A2F] justify-between items-center z-index-10">
        <Droplet />
        <div className="flex float right-0 top-0 mr-5">
          <Link to="../../Home">
            <button className="font-bold border text-[#CBD5E1] border-[#374151] rounded-[5px] px-[10px] py-[5px] transition duration-100 ease-in-out hover:bg-[#2D5F8A] hover:text-[#F7FAFC] hover:cursor-pointer"> 
              <span className="">back to home</span> 
            </button> 
          </Link>
        </div>
      </div>
      {/* PSEUDO HEADER end */}
    </>
  );
}
