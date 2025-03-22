import React, { useContext, useState, useEffect } from "react";
import PseudoHeader from "../components/layout/PseudoHeader";
import Show from "../../assets/images/show.png";
import Hide from "../../assets/images/hide.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { AuthContext } from "../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Functionality for Log In Form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading, response } = useLogin();

  // Setting user to "LOGGED IN"
  const { user, dispatch } = useContext(AuthContext);

  // Sending logged in users back to homepage
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);

    // Clear the form fields after successful login
    if (response) {
      setEmail("");
      setPassword("");
      dispatch({ type: "LOGIN" });
      navigate("/home");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen text-[#F7FAFC] flex flex-wrap justify-center items-center bg-[#050E1A] p-4">
        <PseudoHeader />
        {/* LOGIN FORM start */}
        <div className="w-full max-w-md rounded-[5px] border-[#172A42] border-5">
          <div className="w-full py-4 flex bg-[#172A42] items-center border-b-2 border-b-[#F7FAFC]">
            <h1 className="text-2xl md:text-3xl font-extrabold ml-5">Login</h1>
          </div>
          <form
            className="flex flex-col w-full bg-[#0A1A2F] rounded-b-[5px] p-6 relative"
            onSubmit={handleSubmit}
          >
            <p className="text-[85%] text-[#94A3B8] justify-evenly mb-2">
              Enter login information
            </p>
            <div className="w-full mb-8">
              {/* EMAIL ADDRESS start */}
              <div className="w-full mb-4 mt-4">
                <p className="font-bold text-sm md:text-base">
                  Enter email address:
                </p>
                <input
                  required
                  type="email"
                  onChange={(e) => setEmail(e.target.value.toLowerCase())}
                  value={email}
                  className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 mt-1"
                  placeholder="example@email.com"
                />
              </div>
              {/* EMAIL ADDRESS end */}

              {/* PASSWORD INPUT start */}
              <div className="w-full">
                <p className="font-bold text-sm md:text-base">
                  Enter password:
                </p>
                <div className="relative w-full flex mt-1">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="placeholder:italic bg-[#050E1A] rounded-[5px] w-full py-2 px-3 pr-10"
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
              {/* PASSWORD INPUT end */}
            </div>

            {/* LOGIN BUTTON start */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="text-base md:text-xl py-1 px-4 font-bold border-2 border-[#374151] bg-[#050E1A] rounded-[5px] transition duration-150 ease-in-out text-[#CBD5E1] hover:cursor-pointer hover:bg-[#2D5F8A] hover:text-[#F7FAFC] hover:border-[#F7FAFC]"
                disabled={isLoading}
              >
                Log in
              </button>
            </div>
            {error && (
              <div className="flex justify-around w-full h-5 mt-3 text-red-600 text-sm font-bold">
                {error}
              </div>
            )}
            {/* LOGIN BUTTON end */}

            {/* GO TO LOGIN PAGE start */}
            <div className="border-t-1 mt-4 pt-2 flex justify-around border-gray-600">
              <span className="text-[#94A3B8] mt-2">
                Don't have an account?
              </span>
              <Link to="/auth/sign-up">
                <button className="text-blue-400 hover:text-blue-300 mt-2 cursor-pointer">
                  Register
                </button>
              </Link>
            </div>
            {/* GO TO LOGIN PAGE end */}
          </form>
        </div>
        {/* LOGIN FORM end */}
      </div>
    </>
  );
}
