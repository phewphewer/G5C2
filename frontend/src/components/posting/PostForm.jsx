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
      alert("Re-log in to post.");
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
    <div className="w-full bg-[#602590] hover:bg-[#642796] p-6 shadow-md rounded-lg border-1 border-[#F7FAFC]">
      <div className="space-y-2">
        <div className="flex items-center border-b-5 border-[#ac47fe] pb-2 mb-2 ">
          <h3 className="font-extrabold text-[120%] text-[#d4a0ff] indent-3">
            you
          </h3>
        </div>
        <div className={`flex justify-center items-center h-5 pt-5 pb-2 `}>
          {(!title.trim() || !body.trim()) && (
            <span className="text-red-600 font-semibold text-sm">
              PLEASE GIVE A TITLE AND BODY TO YOUR POST
            </span>
          )}
        </div>
        <form onSubmit={handlePostSubmit}>
          <p className="font-bold text-sm md:text-base text-[#F7FAFC]/90">
            Enter title here:
          </p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            className={`placeholder:text-[#ac47fe] w-full my-2 p-2 border rounded-md text-[#F7FAFC] indent-1 focus:outline-none 
              ${!title.trim() ? "border-[#ac47fe]" : ""}`}
            disabled={isSubmitting}
          />
          <p className="font-bold text-sm md:text-base mt-5 text-[#F7FAFC]/90">
            Enter post content here:
          </p>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="What's on your mind?"
            className={`placeholder:italic placeholder:text-[#ac47fe] w-full h-30 my-2 rounded-md border indent-3 pt-2 overflow-y-scroll text-[#F7FAFC] focus:outline-none 
              ${!body.trim() ? "border-[#ac47fe]" : ""}`}
            disabled={isSubmitting}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className={`rounded-md px-12 py-1 font-bold border-2 bg-[#0081a4] hover:bg-[#00c8ff] flex justify-center items-center w-20 hover:cursor-pointer focus:outline-none ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : "DROP"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
