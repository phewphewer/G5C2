import React, { useState, useEffect } from 'react';
import PseudoHeader from '../../layout/PseudoHeader';
import Show from '../../../assets/images/show.png'
import Hide from '../../../assets/images/hide.png'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
<div className="w-full min-h-screen flex flex-wrap justify-center items-center bg-[#0c172e] p-4">
      <PseudoHeader />
      {/* LOGIN FORM start */}
      <div className="w-full max-w-md rounded-[5px]">
        <div className="w-full py-4 flex bg-[#d28033] rounded-t-[5px] items-center border-b-8 border-b-[#feffff]">
          <h1 className="text-2xl md:text-3xl font-extrabold ml-5">Login</h1>
        </div>
        <form className="flex flex-col w-full bg-[#283D55] rounded-b-[5px] p-6 relative">
          <div className="w-full mb-8">
            {/* EMAIL ADDRESS start */}
            <div className="w-full mb-4">
              <p className="font-bold text-sm md:text-base">Enter email address:</p>
              <input
                type="email"
                className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 mt-1"
                placeholder="example@email.com"
              />
            </div>
            {/* EMAIL ADDRESS end */}

            {/* PASSWORD INPUT start */}
            <div className="w-full">
              <p className="font-bold text-sm md:text-base">Enter password:</p>
              <div className="relative w-full flex mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 pr-10"
                  placeholder="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#85847C] bg-transparent px-2"
                >
                  {showPassword ? (
                    <img src={Hide || "/placeholder.svg"} alt="hide" className="w-auto h-6 md:h-8" />
                  ) : (
                    <img src={Show || "/placeholder.svg"} alt="show" className="w-auto h-6 md:h-8" />
                  )}
                </button>
              </div>
            </div>
            {/* PASSWORD INPUT end */}
          </div>

          {/*  LOGIN BUTTON start */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="text-base md:text-xl py-1 px-4 text-[#feffff] font-bold border-2 bg-[#283D55] rounded-[5px] transition duration-150 ease-in-out hover:cursor-pointer hover:bg-[#0c172e]"
            >
              Log in
            </button>
          </div>
          {/*  LOGIN BUTTON end */}
        </form>
      </div>
      {/* LOGIN FORM end */}
    </div>
    </>
  );
}
