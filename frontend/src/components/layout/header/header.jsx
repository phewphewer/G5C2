import { Link, useNavigate } from "react-router-dom";
import Droplet from "../../text/Droplet.jsx";

export default function Header({ isOpen }) {
  const navigate = useNavigate()
  return (
    <header
      className={`fixed top-0 h-[60px] bg-gradient-to-b from-[#2e3f68] via-[#213d78] to-blue-900 text-[#feffff] 
                 flex items-center justify-between px-5 
                 transition-all duration-100 ease-in-out
                 w-full`} // Always full width of its container
    >
      <div>
        <Droplet />
      </div>

      <div className="mr-[60px] flex gap-3 font-semibold">
        <button onClick={() => navigate("/auth/login")} className="rounded-md border border-[#0c172e] px-[9px] py-[4px] text-[#feffff] hover:bg-[#0c172e]">
         Log-in
        </button>
        <button onClick={() => navigate("/auth/sign-up")} className="rounded-md px-[10px] py-[5px] text-[#feffff] bg-[#0c172e] hover:border hover:border-[#0c172e] hover:bg-[#283D55] hover:px-[9px] hover:py-[4px]">
          Register
        </button>
      </div>
    </header>
  );
}
