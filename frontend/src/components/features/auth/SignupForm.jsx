import React, { useState, useEffect } from "react";
import PseudoHeader from "../../layout/PseudoHeader";
import Show from "../../../assets/images/show.png";
import Hide from "../../../assets/images/hide.png";

export default function SignupForm() {
  // show/hide password
  const [showPassword, setShowPassword] = useState(false);

  // functionality for email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, repeatPassword);

    // Example validation (if passwords don't match):
    if (password !== repeatPassword) {
      console.log("Passwords do not match", password, " ", repeatPassword);
      return;
    }

    console.log("Form submitted!");
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#0c172e] p-4">
        <PseudoHeader />
        {/* SIGN UP FORM start */}
        <div className="w-full max-w-lg rounded-[5px]">
          <div className="w-full py-4 flex bg-[#d28033] rounded-t-[5px] items-center border-b-8 border-b-[#feffff]">
            <h1 className="text-2xl md:text-3xl font-extrabold ml-5">
              SIGN UP
            </h1>
          </div>
          {/* SIGN UP FORM start */}
          <form
            className="flex flex-col w-full bg-[#283D55] rounded-b-[5px] p-6"
            onSubmit={handleSubmit}
          >
            <div className="w-full space-y-4">
              {/* USERNAME */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">
                  Enter a valid username:
                </p>
                <input
                  type="text"
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="Aws0meName123"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">
                  Enter email address:
                </p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="example@email.com"
                />
              </div>

              {/* PASSWORD */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">
                  Enter a valid password:
                </p>
                <div className="relative w-full mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 pr-10"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#85847C] bg-transparent px-2"
                  >
                    {showPassword ? (
                      <img
                        src={Hide || "/placeholder.svg"}
                        alt="hide"
                        className="w-auto h-6 md:h-8"
                      />
                    ) : (
                      <img
                        src={Show || "/placeholder.svg"}
                        alt="show"
                        className="w-auto h-6 md:h-8"
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* REPEAT PASSWORD */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">
                  Re-enter password:
                </p>
                <input
                  type="password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                  className="placeholder:italic bg-[#0c172e] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="very secret password (again)"
                />
              </div>
            </div>

            {/* SIGNUP BUTTON start */}
            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="text-base md:text-xl py-1 px-4 text-white font-bold border bg-[#283D55] rounded-[5px] transition duration-150 ease-in-out hover:cursor-pointer hover:bg-[#0c172e]"
              >
                sign up
              </button>
            </div>
            {/* SIGNUP BUTTON end */}
          </form>
          {/* SIGN UP FORM end */}
        </div>
      </div>
    </>
  );
}
