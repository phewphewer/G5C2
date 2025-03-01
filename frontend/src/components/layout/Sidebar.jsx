// SIDEBAR NAVIGATION

// import React from "react";

// export default function Sidebar() {
//   return (
//     <>
//       <div className="w-[20%] h-[90vh] border-r-1 border-indigo-800 flex items-center justify-center flex-col">
//         <button className="py-2 px-20  bg-gray-600 rounded-md flex justify-start items-center">
//           Home
//         </button>
//         <button className="py-2 px-20 hover:bg-gray-600 rounded-md">
//           Popular
//         </button>
//       </div>
//     </>
//   );
// }

import { useState } from 'react';

export default function AccordionNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* SIDEBAR start */}
      <div
        className={`fixed top-0 left-0 h-screen flex transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="h-screen bg-gray-800 text-white p-4 flex flex-col w-full relative">
          <button
            className="p-3 rounded-lag absolute top-4 right-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            MENU
          </button>
          {isOpen && (
            <div className="flex-1 flex flex-col justify-start mt-12 space-y-2">
              <div className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                Home
              </div>
              <div className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600">
                Profile
              </div>
            </div>
          )}
        </div>  
        
      </div>
      {/* SIDEBAR end */}
    </div>
  );
}
