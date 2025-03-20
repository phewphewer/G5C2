import { Link, useNavigate } from "react-router-dom";
import Droplet from "../../text/Droplet.jsx";
import { useLogout } from "../../../hooks/useLogout.jsx";
import { useAuthContext } from "../../../hooks/useAuthContext.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";

export default function Header({ isOpen }) {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("/api/user/username", {
  //         credentials: "include",
  //       });
  //       if (!response.ok) throw new Error("Failed to fetch user");
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <header
      className={`fixed  ${
        isOpen ? "left-[230px]" : "left-[30px]"
      } top-0 h-[60px] bg-[#0A1A2F]  
    text-[#F7FAFC] flex items-center justify-between  
    transition-all duration-300 ease-in-out w-full`} // Always full width of its container
    >
      <div>
        <Droplet />
      </div>

      {/* Create a log out button here, hiding the login and register button (if logged in) */}

      {user && (
        <div className="mr-[60px] flex gap-3 font-semibold">
          <button
            onClick={handleClick}
            className="rounded-md border border-[#0c172e] px-[10px] py-[10px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            {/* {user.username} */}
          </button>
        </div>
      )}

      {!user && (
        <div className="mr-[60px] flex gap-3 font-semibold">
          <button
            onClick={() => navigate("/auth/login")}
            className="rounded-md border border-[#0c172e] px-[10px] py-[5px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            Log-in
          </button>
          <button
            onClick={() => navigate("/auth/sign-up")}
            className="rounded-md border border-[#0c172e] px-[10px] py-[5px] text-[#F7FAFC] hover:bg-[#172A42] bg-[#050E1A] hover:border-[#F7FAFC] hover:cursor-pointer"
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
}
