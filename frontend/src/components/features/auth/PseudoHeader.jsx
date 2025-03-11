import React from 'react';
import { Link } from 'react-router-dom';
import Droplet from '../../text/Droplet';

export default function PseudoHeader() {
  return (
    <>
      {/* PSEUDO HEADER start */}
      <div className="absolute left-0 top-0 right-0 flex w-full h-[60px] bg-[#283D55] justify-between items-center">
        {/* <h1 className="font-extrabold text-[2em] float left-0 ml-5">DROPLET</h1> */}
        <Droplet />
        <div className="flex float right-0 top-0 mr-5">
          <Link to="../../">
            <button className="font-bold border text-[#feffff] border-[#0c172e] rounded-[5px] px-[9px] py-[4px] transition duration-100 ease-in-out hover:bg-[#0c172e]">
              back to home
            </button>
          </Link>
        </div>
      </div>
      {/* PSEUDO HEADER end */}
    </>
  );
}
