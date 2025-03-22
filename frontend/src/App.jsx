import { useState } from "react";

import {
  useNavigate
} from "react-router-dom";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <button
          onClick={() => navigate("/Home")}
          className="bg-black w-full h-full text-white hover:cursor-pointer"
        >
          To Home Page
        </button>
      </div>
    </>
  );
}

export default App;
