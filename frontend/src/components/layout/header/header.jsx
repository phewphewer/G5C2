import { Link, useNavigate } from "react-router-dom";
import Droplet from "../../text/Droplet.jsx";

export default function Header({ isOpen }) {
  const navigate = useNavigate();
  return (
    <header
      className={`fixed  ${
        isOpen ? "left-[230px]" : "left-[30px]"
      } top-0 h-[60px] bg-[#0A1A2F]  
    text-[#feffff] flex items-center justify-between  
    transition-all duration-300 ease-in-out w-full`} // Always full width of its container
    >
      <div>
        <Droplet />
      </div>

      <div className="mr-[60px] flex gap-3 font-semibold">
        <button
          onClick={() => navigate("/auth/login")}
          className="rounded-md border border-[#0c172e] px-[9px] py-[4px] text-[#feffff] hover:bg-[#172A42] cursor-pointer"
        >
          Log-in
        </button>
        <button
          onClick={() => navigate("/auth/sign-up")}
          className="rounded-md px-[10px] py-[5px] text-[#feffff] bg-[#0c172e] hover: hover: hover:bg-[#172A42] cursor-pointer"
        >
          Register
        </button>
      </div>
    </header>
  );
}
