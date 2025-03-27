import React from "react";
import { useEffect, useState } from "react";
import PostCard from "../../components/posting/PostCard";
import RightSidebar from "./components/RightSidebar";
import DashboardNavBar from "./components/DashboardNavBar";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProfileLayout = () => {
    const { user } = useAuthContext;
    const [posts, setPosts] = useState([]);
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
        <div className="app-container relative bg-[#050E1A]">
            {/* Pass state and setter to Sidebar */}
            <div className="app-container relative bg-[#050E1A] custom-scrollbar">
                <DashboardNavBar />
            </div>
            {/* Pass sidebar state to Header */}
            <div className="main-content ml-[250px] transition-all duration-100 ease-in-out">
                {/* <Header isOpen={isSidebarOpen} /> */}
                {/* <div className="flex flex-col md:flex-row w-full h-screen p-4 gap-4 bg-[#283D55]"> */}
                <div className="min-h-screen h-screen bg-[#050E1A] text-white pt-5 flex gap-4 ">
                    {/* Main Content */}
                    {/* example 4 posts */}
                    <main className="space-y-5 md:w-3/4 overflow-y-auto mr-2 custom-scrollbar">
                        {/* {(user.username === post.user.username)} */}
                        <PostCard />
                    </main>

                    {/* Left Sidebar */}
                    <aside className="w-full md:w-1/4 bg-[#0C172E] p-4 shadow-md rounded-lg text-white overflow-y-auto custom-scrollbar">
                        <div>
                            <div className="flex items-center justify-start">
                                {/* Placeholder profile */}
                                {/* Personal details placeholder */}
                                <div style={{ lineHeight: "1rem" }}>
                                    <strong className="text-2xl block text-[#D09966]">
                                        {/* {user && `${user.username}`} */}
                                        *USERNAME*
                                    </strong>
                                </div>
                            </div>
                            <div className="border-1 border-[#283D55]"></div>
                            <div className="mt-4 w-full space-y-4">
                                <strong className="text-1xl bg-[#283D55] block px-2 py-3 text-[#E4D8BE]">
                                    Personal Information
                                </strong>
                                <div className="w-full">
                                    <div className="mt-1">
                                        <small className="text-[#D09966]">
                                            Email
                                        </small>
                                        <div className="flex items-center text-[#E4D8BE]">
                                            <i className="fas fa-user mr-2"></i>
                                            <strong className="font-semibold">
                                                *SAMPLE@EMAIL.COM*
                                            </strong>
                                        </div>
                                    </div>
                                    <div className="mt-1">
                                        <small className="text-[#D09966]">
                                            DATE JOINED
                                        </small>
                                        <div className="flex items-center text-[#E4D8BE]">
                                            <i className="fas fa-user mr-2"></i>
                                            <strong className="font-semibold">
                                                *SAMPLEDATE*
                                            </strong>
                                        </div>
                                    </div>

                                    <div className="border-1 border-[#283D55] mt-5"></div>

                                    {/* <button className="mt-5 px-4 py-2 bg-[#6D513E] text-[#E4D8BE] rounded-lg w-full hover:bg-[#D09966]">
                                        <i className="fas fa-edit mr-5"></i>
                                        EDIT PROFILE
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Remove Right Sidebar */}
                    {/* <RightSidebar /> */}
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
