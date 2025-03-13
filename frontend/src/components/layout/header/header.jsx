import { Link } from "react-router-dom"
import Droplet from "../../text/Droplet.jsx"

export default function Header({ isOpen }) {
  return (
    <header
      className={`fixed top-0 h-[60px] bg-[#283D55] text-[#feffff] 
                 flex items-center justify-between px-5 
                 transition-all duration-100 ease-in-out
                 w-full`} // Always full width of its container
    >
      <div className="ml-[50px]">
        <Droplet />
      </div>

      <div className="mr-[60px] flex gap-6">
        <button className="rounded-md border border-[#0c172e] mr-[5px] px-[9px] py-[4px] text-[#feffff] hover:bg-[#0c172e]">
          <Link to="./auth/login">Log-in</Link>
        </button>

        <button className="rounded-md mr-[5px] px-[10px] py-[5px] text-[#feffff] bg-[#0c172e] hover:border hover:border-[#0c172e] hover:bg-[#283D55] hover:px-[9px] hover:py-[4px]">
          <Link to="./auth/sign_up">Register</Link>
        </button>
      </div>
    </header>
  )
}