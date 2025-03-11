import React from 'react';
import { useEffect, useState } from 'react';
import PostCard from '../../components/features/posting/PostCard';
import RightSidebar from '../../pages/ProfileDashboard/RightSidebar';

const ProfileLayout = () => {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch('http://localhost:4000/log_in/:id');
  //     const json = await response.json();
  //     console.log(json);
  //     if (response.ok) {
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen p-4 gap-4 bg-[#283D55]">
      {/* Left Sidebar */}
      <aside className="w-full md:w-1/4 bg-[#0C172E] p-4 shadow-md rounded-lg text-white">
        <div>
          <div className="flex items-center justify-start">
            {/* Placeholder profile */}
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Profile Avatar"
              className="w-24 h-24 bg-gray-300 rounded-full"
            />
            {/* Personal details placeholder */}
            <div style={{ lineHeight: '1rem' }}>
              <strong className="text-2xl block text-[#D09966]">
                John Doe
              </strong>
              <small className="block text-[#E4D8BE]">johndoe@gmail.com</small>
              <small className="block text-[#E4D8BE]">+639512793354</small>
            </div>
          </div>
          <div className="border-1 border-[#283D55]"></div>
          <div className="mt-4 w-full space-y-4">
            <strong className="text-1xl bg-[#283D55] block px-2 py-3 text-[#E4D8BE]">
              Personal Information
            </strong>
            <div className="w-full">
              <div className="mt-1">
                <small className="text-[#D09966]">Full Name</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-user mr-2"></i>
                  <strong className="font-semibold">John Doe</strong>
                </div>
              </div>
              <div className="mt-1 border-t border-[#283D55]">
                <small className="text-[#D09966]">Birthdate</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-birthday-cake mr-2"></i>
                  <strong className="font-semibold">January 1, 1990</strong>
                </div>
              </div>
              <div className="mt-1 border-t border-[#283D55]">
                <small className="text-[#D09966]">Location</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <strong className="font-semibold">New York, USA</strong>
                </div>
              </div>
              <div className="mt-1 border-t border-[#283D55]">
                <small className="text-[#D09966]">Occupation</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-briefcase mr-2"></i>
                  <strong className="font-semibold">Software Engineer</strong>
                </div>
              </div>
              <div className="mt-1 border-t border-[#283D55]">
                <small className="text-[#D09966]">Education</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-graduation-cap mr-2"></i>
                  <strong className="font-semibold">MIT</strong>
                </div>
              </div>
              <div className="mt-1 border-t border-[#283D55]">
                <small className="text-[#D09966]">Hobbies</small>
                <div className="flex items-center text-[#E4D8BE]">
                  <i className="fas fa-football-ball mr-2"></i>
                  <strong className="font-semibold">Football, Reading</strong>
                </div>
              </div>

              <div className="border-1 border-[#283D55] mt-5"></div>

              <button className="mt-5 px-4 py-2 bg-[#6D513E] text-[#E4D8BE] rounded-lg w-full hover:bg-[#D09966]">
                <i className="fas fa-edit mr-5"></i>
                EDIT PROFILE
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      {/* example 4 posts */}
      <main className="space-y-5 md:w-2/4 overflow-y-auto">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default ProfileLayout;
