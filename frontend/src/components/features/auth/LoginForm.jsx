import React, { useState, useEffect } from 'react';
import PseudoHeader from '../../layout/PseudoHeader';
import Show from '../../../assets/images/show.png'
import Hide from '../../../assets/images/hide.png'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-[#0c172e]">
        <PseudoHeader />
        {/* LOGIN FORM start */}
        <div className="w-[25%] h-[40vh] rounded-[5px] ">
          <div className="w-full h-[9vh] flex bg-[#d28033] rounded-t-[5px] items-center border-b-8 border-b-[#feffff]">
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
                  // value={emailAddress}
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                  placeholder="example@email.com"
                />
              </div>
              {/* EMAIL ADDRESS end */}
              {/* PASSWORD INPUT start */}
              <div className="w-full h-auto my-15 leading-10">
                <p className="font-bold">Enter password:</p>
                {/* <input
                  type="text"
                  name=""
                  // value={password}
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-[1px] indent-1"
                  placeholder="password"
                /> */}
                <div className="relative w-full flex">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="placeholder:italic bg-[#0c172e] rounded-l-[5px] w-full py-[1px] indent-1 pr-10"
                    placeholder="password"
                  />  
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#85847C] bg-[#0c172e] px-2"
                  >
                    {showPassword ? <img src={Hide} alt="hide" className='w-auto h-[4vh]' /> : <img src={Show} alt="hide" className='w-auto h-[40px]'/> }
                  </button>
                </div>
              </div>
              {/* PASSWORD INPUT end */}
            </div>
            {/*  LOGIN BUTTON start */}
            <div className="absolute flex justify-center items-center right-5 bottom-5   ">
              <button
                type="submit"
                className="text-[1.5em] py-[4px] px-[9px] text-[#feffff] font-bold border-2 bg-[#283D55] rounded-[5px] transition duration-150 ease-in-out hover:cursor-pointer hover:bg-[#0c172e]"
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
