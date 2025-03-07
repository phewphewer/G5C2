import React from "react";
import PseudoHeader from "./PseudoHeader";

export default function LoginForm() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center bg-[#0c172e]">
        <PseudoHeader />
        {/* LOGIN FORM start */}
        <div className="w-[30%] h-[50vh] rounded-[7px] ">
          <div className="h-[100%]">
            <div className="w-full h-[9vh] flex bg-[#d28033] rounded-t-[7px] items-center border-b-8 border-b-[#feffff]">
              <h1 className="text-[2em] font-extrabold ml-5">Login</h1>
            </div>
            <form className="flex items-center w-full h-full bg-[#283D55] rounded-b-[5px] relative">
              <div className="mx-10 w-full">
                {/* EMAIL ADDRESS start */}
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
                {/* EMAIL ADDRESS end */}
                {/* PASSWORD INPUT start */}
                <div className="w-full h-auto my-15 leading-10">
                  <p className="font-bold">Enter password:</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1 mb-4"
                    placeholder="password"
                  />
                </div>
                {/* PASSWORD INPUT end */}
              </div>
              {/*  LOGIN BUTTON start */}
              <div className="absolute flex justify-center items-center right-10 bottom-7   ">
                <button
                  type="submit"
                  className="text-[1.5rem] py-[4px] px-[9px] font-bold border-2 bg-[#283D55] rounded-[5px] transition duration-150 ease-in-out hover:cursor-pointer hover:bg-[#0c172e]"
                >
                  Log in
                </button>
              </div>
              {/*  LOGIN BUTTON end */}
            </form>
          </div>
        </div>
        {/* LOGIN FORM end */}
      </div>
    </>
  );
}
