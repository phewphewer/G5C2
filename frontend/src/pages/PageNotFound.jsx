import React from "react";
import PseudoHeader from "../components/layout/PseudoHeader";

export default function PageNotFound() {
  return (
    <>
      <PseudoHeader />
      <div className="bg-[#050E1A] w-screen h-screen flex justify-center items-center">
        <h1 className="font-extrabold text-5xl">
          <span className="text-red-600">ERROR 404 </span>
          <span className="text-yellow-600">PAGE NOT FOUND</span>
        </h1>
      </div>
    </>
  );
}
