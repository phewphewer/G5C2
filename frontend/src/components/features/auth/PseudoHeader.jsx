import React from "react";
import { Link } from "react-router-dom";
import Droplet from "../../text/Droplet";

export default function PseudoHeader() {
  return (
    <>
      {/* PSEUDO HEADER start */}
      <div className="absolute left-0 top-0 right-0 w-full h-[60px] bg-[#283D55] flex justify-between items-center">
        {/* <h1 className="font-extrabold text-[2em] float left-0 ml-5">DROPLET</h1> */}
        <Droplet />
        <div className="flex float">
          <Link to="../../">
            <button className="mx-5 font-bold border-2 text-[#feffff] border-[#0c172e] rounded-[5px] px-[9px] py-[6px] transition duration-100 ease-in-out hover:bg-[#0c172e]">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      {/* PSEUDO HEADER end */}
    </>
  );
}
