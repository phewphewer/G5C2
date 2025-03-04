import "./App.css";
import Header from "./components/layout/header/header";
import Mainpage from "./components/layout/Mainpage";
import Sidebar from "./components/layout/sidebar/sidebar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* <div>
        <div className="flex justify-around py-5">
          <div>
            <h1 className="text-5xl text-white">Capstone 2</h1>
            <h3 className="text-white text-center">G-5 Presents</h3>
          </div>
        </div>
      </div> */}
      <div className="container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
          <Header isOpen={isSidebarOpen} />
        </div>
      </div>
    </>
  );
}

export default App;
