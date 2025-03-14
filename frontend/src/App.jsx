import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  // Manage sidebar state at the parent level
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <button className='bg-black w-full h-full'>
          <Link to="./home">To Home Page</Link>
        </button>
      </div>
    </>
  );
}

export default App;
