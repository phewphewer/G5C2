import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext"; // Import authentication context

export default function PostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { user } = useAuthContext();

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            alert("Both title and body are required!");
            return;
        }

        if (!user || !user.token) {
            alert("You must be logged in to post.");
            return;
        }

        try {
            const response = await fetch("/api/post/create_post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify({ title, body }),
            });

            if (!response.ok) {
                throw new Error("Failed to create post");
            }

            const newPost = await response.json();
            console.log("Post created:", newPost);

            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="w-full bg-[#2987C3] p-6 shadow-md rounded-lg">
            <div className="space-y-4">
                <div className="flex items-center">
                    <h3 className="font-bold text-[120%] text-[#30bffc]">
                        You
                    </h3>
                </div>
                <form onSubmit={handlePostSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        className="w-full my-2 p-2 border rounded-md"
                    />
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="What's on your mind?"
                        className="placeholder:italic w-full h-30 my-5 rounded-md border indent-2 pt-1 overflow-y-scroll"
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md font-extrabold flex justify-center items-center bg-blue-800 w-20 hover:cursor-pointer"
                        >
                            Ripple
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
