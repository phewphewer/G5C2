import React, { useState } from "react";

export default function FeaturedPost({
    name = "John Doe",
    time = "2 hours ago",
    content = "Just finished working on an amazing project with the team! Really proud of what we've accomplished over the last few weeks. Looking forward to sharing more details soon. #teamwork #productivity",
}) {
    const [isExpanded, setIsExpanded] = useState(false); // expand track see more ulit

    // expand see more
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // Truncate ng content pag magsesee more
    const maxLength = 100; // 100 character maxi
    const truncatedContent =
        content.length > maxLength && !isExpanded
            ? `${content.slice(0, maxLength)}...`
            : content;

    return (
        <>
            <div className="w-1/4 p-4">
                <div className="bg-[#00c1b1]/70 hover:bg-[#00c1b1] text-[#F7FAFC]/80 hover:text-[#F7FAFC] min-w-80 p-4 rounded-lg hover:border-[#ffffff] border-[#bdbdbd] z-0 border-2 sticky top-20 transition duration-300 ease-in-out">
                    <h4 className="text-center font-bold text-2xl mb-4">
                        FEATURED
                    </h4>
                    <div className="space-y-4 overflow-y-auto max-h-[70vh] custom-scrollbar">
                        <div className="bg-[#0a2f26] text-[#F7FAFC] z-[0] rounded-lg p-5 shadow-lg mb-5 hover:border-[#ffffff] border-[#808080] border-2 ">
                            {/* FEATURE HEADER PO */}
                            <div className="flex items-center space-x-3">
                                <div>
                                    <p className="font-bold ">{name}</p>
                                    <p className="text-sm text-[#CBD5E1]">
                                        {time}
                                    </p>
                                </div>
                            </div>

                            {/* Post Content pag hindi naka see more*/}
                            <p className="mt-3 text-xs">{truncatedContent}</p>

                            {/* see more section mga boss */}
                            {content.length > maxLength && (
                                <button
                                    onClick={toggleExpand}
                                    className="mt-2 text-[#CBD5E1] hover:text-[#F7FAFC] text-xs cursor-pointer"
                                >
                                    {isExpanded ? "See Less" : "See More"}{" "}
                                    {/* button ng see more */}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
