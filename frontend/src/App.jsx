import { useState } from "react";

// basic navigation (without defining routes) - the import is not removed for educational purposes . .
// import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

// handle both navigation and routing (i.e., define what content to show based on the URL) - includes Routes & Route
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // Manage sidebar state at the parent level
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
