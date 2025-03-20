import React, { useState, useEffect, useContext } from "react";
import PseudoHeader from "../../layout/PseudoHeader";
import Show from "../../../assets/images/show.png";
import Hide from "../../../assets/images/hide.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { useSignup } from "../../../hooks/useSignUp";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function SignupForm() {
  // show/hide password
  const [showPassword, setShowPassword] = useState(false);

  // functionality for username, email, password & repeat password
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  // Sending logged in users back to homepage
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(userName, email, password);
    if (response) {
      console.log("Form submitted!");
      console.log(userName, email, password, repeatPassword);
      dispatch({ type: "LOGIN" });
      console.log(user.id);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen text-[#F7FAFC] flex flex-wrap justify-center items-center bg-[#050E1A] p-4">
        <PseudoHeader />
        {/* SIGN UP FORM start */}
        <div className="w-full max-w-md rounded-[5px] border-[#172A42] border-5">
          <div className="w-full py-4 flex bg-[#172A42] items-center border-b-2 border-b-[#F7FAFC]">
            <h1 className="text-2xl md:text-3xl font-extrabold ml-5">
              SIGN UP
            </h1>
          </div>
          {/* SIGN UP FORM start */}
          <form
            className="flex flex-col w-full bg-[#0A1A2F] rounded-b-[5px] p-6 relative"
            onSubmit={handleSubmit}
          >
            <p className="text-[85%] text-[#94A3B8] justify-evenly mb-5">
              please enter out all fields before submitting
            </p>
            <div className="w-full space-y-4">
              {/* USERNAME */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">Username:</p>
                <input
                  required
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="Aws0meName123"
                />
              </div>

              {/* EMAIL ADDRESS */}
              <div className="w-full">
                <p className="text-sm md:text-base font-semibold">
                  Valid Email Address:
                </p>
                <input
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="example@email.com"
                />
              </div>

              {/* PASSWORD */}
              <div className="w-full">
                <p className="text-sm md:text-base font-semibold">Password:</p>
                <p className="text-[75%] text-[#94A3B8] justify-evenly">
                  password must contain a minimum of 8 letters with 1 symbol, 1
                  number, 1 uppercase and 1 lowercase letter
                </p>
                <div className="relative w-full mt-1">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 mt-1"
                    placeholder="password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#85847C] bg-transparent px-2"
                  >
                    {showPassword ? (
                      <img
                        src={Show || "/placeholder.svg"}
                        alt="show"
                        className="w-auto h-6 md:h-8"
                      />
                    ) : (
                      <img
                        src={Hide || "/placeholder.svg"}
                        alt="hide"
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
                  required
                  type="password"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  value={repeatPassword}
                  className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="very secret password (again)"
                />
              </div>
            </div>

            {/* SIGNUP BUTTON start */}
            <div>
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className="text-base md:text-xl py-1 px-4 font-bold border-2 border-[#374151] bg-[#050E1A] rounded-[5px] transition duration-150 ease-in-out text-[#CBD5E1] hover:cursor-pointer hover:bg-[#2D5F8A] hover:text-[#F7FAFC] hover:border-[#F7FAFC]"
                  disabled={isLoading}
                >
                  Sign up
                </button>
              </div>
              {password !== repeatPassword && repeatPassword ? (
                <div className="flex justify-around w-full h-5 mt-3 text-red-600 text-sm font-bold">
                  Passwords do not match
                </div>
              ) : (
                error && (
                  <div className="flex justify-around w-full h-5 mt-3 text-red-600 text-sm font-bold">
                    {error}
                  </div>
                )
              )}
            </div>
            {/* SIGNUP BUTTON end */}
            {/* GO TO LOGIN PAGE start*/}
            <div className="border-t-1 mt-4 pt-2 flex justify-around border-gray-600">
              <span className="text-[#94A3B8] mt-2">
                Already have an account?
              </span>
              <Link to="/auth/login">
                <button className="text-blue-400 hover:text-blue-300 mt-2">
                  Log-in
                </button>
              </Link>
            </div>
            {/* GO TO LOGIN PAGE end*/}
          </form>
          {/* SIGN UP FORM end */}
        </div>
      </div>
    </>
  );
}
