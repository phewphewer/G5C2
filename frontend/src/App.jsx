import { useState } from 'react';
import { BrowserRouter as Router, Link, useNavigate  } from 'react-router-dom';

function App() {
  // Manage sidebar state at the parent level
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <button onClick={() => navigate("/Home")} className='bg-black w-full h-full hover:cursor-pointer'>
          To Home Page
        </button>
      </div>
    </>
  );
}

export default App;
