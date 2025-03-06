import React, { useState, useEffect } from "react";
import PseudoHeader from "./PseudoHeader";

export default function SignupForm() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#0c172e]">
        <PseudoHeader />
        {/* SING UP FORM start */}
        <div className="w-[40%] h-[70%] rounded-[5px] ">
          <div className="h-[100%]">
            <div className="w-full h-[9vh] flex bg-[#d28033] rounded-t-[5px] items-center border-b-8 border-b-[#feffff]">
              <h1 className="text-[2em] font-extrabold ml-5">SIGN UP</h1>
            </div>
            {/* SIGN UP FORM start */}
            <form
              onSubmit=""
              className="flex items-center w-full h-full bg-[#283D55] rounded-b-[5px] relative"
            >
              <div className="mx-10 w-full">
                {/* USERNAME */}
                <div className="w-full h-auto leading-10">
                  <p className="font-bold">Enter a valid username:</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                    placeholder="Aws0meName123"
                  />
                </div>
                {/* EMAIL ADDRESS */}
                <div className="w-full h-auto leading-10">
                  <p className="font-bold">Enter email address:</p>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                    placeholder="example@email.com"
                  />
                </div>
                {/* PASSWORD */}
                <div className="w-full h-auto leading-10">
                  <p className="font-bold">Enter a valid password:</p>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                    placeholder="very secret password"
                  />
                </div>
                {/* REPEAT PASSWORD */}
                <div>
                  <div className="w-full h-auto leading-10">
                    <p className="font-bold">Re-enter password:</p>
                    <input
                      type="password"
                      name=""
                      id=""
                      className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                      placeholder="very secret password (again)"
                    />
                  </div>
                </div>
              </div>
              {/* SIGNUP BUTTON start */}
              <div className="absolute flex justify-center items-center right-5 bottom-5   ">
                <button
                  type="submit"
                  className="text-[1.5em] py-[4px] px-[9px] font-bold border-1 bg-[#283D55] rounded-[5px] transition duration-150 ease-in-out hover:cursor-pointer hover:bg-[#0c172e]"
                >
                  sign up
                </button>
              </div>
              {/* SIGNUP BUTTON end */}
            </form>
            {/* SIGN UP FORM end */}
          </div>
        </div>
      </div>
    </>
  );
}
