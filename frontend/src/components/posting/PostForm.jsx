"use client";

import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext"; // Import authentication context

export default function PostForm({ onPostCreated }) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { user } = useAuthContext();
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        setIsSubmitting(true);

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

            // Call the callback function to update the parent component's state
            if (onPostCreated) {
                onPostCreated(newPost);
            }

            // Clear the form
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error creating post:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-[#3b3699] hover:bg-[#3d379c] p-6 shadow-md rounded-lg border-1 border-[#F7FAFC]">
            <div className="space-y-4">
                <div className="flex items-center">
                    <h3 className="font-bold text-[120%] text-[#00c8ff]">
                        you
                    </h3>
                </div>
                <form onSubmit={handlePostSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        className="w-full my-2 p-2 border border-[#94A3B8] hover:border-[#F7FAFC] rounded-md text-[#F7FAFC] focus:outline-none"
                        disabled={isSubmitting}
                    />
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="What's on your mind?"
                        className="placeholder:italic w-full h-30 my-5 rounded-md border border-[#94A3B8] hover:border-[#F7FAFC] indent-2 pt-1 overflow-y-scroll text-[#F7FAFC] focus:outline-none"
                        disabled={isSubmitting}
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`rounded-md px-12 py-1 font-bold border-2 bg-[#0081a4] hover:bg-[#00c8ff] flex justify-center items-center w-20 hover:cursor-pointer focus:outline-none ${
                                isSubmitting
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "..." : "RIPPLE"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
