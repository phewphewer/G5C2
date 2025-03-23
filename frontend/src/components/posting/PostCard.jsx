"use client";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const PostCard = () => {
    const [posts, setPosts] = useState([]);
    const { user } = useAuthContext();
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState({});
    const [showDropdown, setShowDropdown] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch(
                user?.token ? "/api/post/posts" : "/api/post/public",
                {
                    headers: user?.token
                        ? { Authorization: `Bearer ${user.token}` }
                        : {},
                }
            );
            const json = await response.json();

            if (response.ok && json.getPosts && Array.isArray(json.getPosts)) {
                setPosts(json.getPosts);
            } else {
                console.error(
                    "Error: Expected an array of posts, received:",
                    json
                );
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleLike = async (postId, isLiked) => {
        try {
            const endpoint = isLiked
                ? `/api/like/removelike/${postId}`
                : `/api/like/addlike/${postId}`;

            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Toggle like state based on response
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post._id === postId
                        ? {
                              ...post,
                              likeCount: isLiked
                                  ? post.likeCount - 1
                                  : post.likeCount + 1,
                              isLiked: !isLiked,
                          }
                        : post
                )
            );
        } catch (error) {
            console.error("Failed to toggle like:", error.message);
        }
    };

    const handleComment = (e, postId) => {
        e.preventDefault();
        if (commentText[postId]?.trim()) {
            const newComment = {
                postId,
                user: "You",
                text: commentText[postId],
                create_date: "Just now",
            };
            setComments([newComment, ...comments]);
            setCommentText((prev) => ({ ...prev, [postId]: "" }));
            setShowComments((prev) => ({ ...prev, [postId]: true }));
        }
    };

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`/api/post/delete_post/${postId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${user?.token}`,
                },
            });

            if (response.ok) {
                setPosts((prevPosts) =>
                    prevPosts.filter((post) => post._id !== postId)
                );
            } else {
                console.error("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const toggleDropdown = (postId) => {
        setShowDropdown(showDropdown === postId ? null : postId);
    };

    const toggleComments = (postId) => {
        setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
    };

    return (
        <>
            {posts &&
                posts.map((post) => (
                    <div key={post._id}>
                        <div className="w-full bg-[#0A1A2F] p-6 shadow-md rounded-lg mb-5 hover:border-[#2D5F8A] border-[#1F2937] border-1">
                            <div className="space-y-4">
                                {/* Header with user info and options */}
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <h3 className="text-md font-bold text-[#F7FAFC]">
                                            {post.user
                                                ? post.user.username
                                                : "Deleted user"}
                                        </h3>
                                        <p className="text-xs text-[#CBD5E1]">
                                            {new Date(
                                                post.createdAt
                                            ).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <button
                                            className="text-[#CBD5E1] p-1 rounded-full hover:bg-[#1E2A3B] hover:text-white ='bg-blue-500'"
                                            onClick={() =>
                                                toggleDropdown(post._id)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                                />
                                            </svg>
                                        </button>
                                        {showDropdown === post._id && (
                                            <div className="absolute right-0 mt-2 w-32 bg-[#1E2A3B] rounded-md shadow-lg border border-[#283D55]">
                                                <ul className="py-1">
                                                    <li className="px-4 py-2 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer">
                                                        Edit
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer"
                                                        onClick={() =>
                                                            handleDelete(
                                                                post._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Post content */}
                                <h2 className="font-bold text-[120%] text-[#30bffc]">
                                    {post.title}
                                </h2>
                                <p className="text-[#F7FAFC] text-[0.95rem]">
                                    {post.body}
                                </p>
                            </div>

                            {/* Engagement stats */}
                            <div className="flex justify-between text-sm text-[#CBD5E1] pt-2 border-t border-[#283D55]">
                                <span>{post.likeCount} likes</span>
                                <span>{post.commentCount} comments</span>
                            </div>

                            {/* Action buttons */}
                            <div className="flex justify-between border-t border-[#283D55] border-b py-2">
                                <button
                                    className={`flex items-center cursor-pointer space-x-2 px-4 py-1 rounded-md ${
                                        post.isLiked
                                            ? "text-[#48c5f7] hover:bg-[#256D85]"
                                            : "text-[#94A3B8] hover:bg-[#2D5F8A]"
                                    }`}
                                    onClick={() =>
                                        handleLike(post._id, post.isLiked)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                    </svg>
                                    <span>Like</span>
                                </button>
                                <button
                                    className="flex items-center space-x-2 px-4 py-1 cursor-pointer rounded-md text-[#CBD5E1] hover:bg-[#2D5F8A]"
                                    onClick={() => toggleComments(post._id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Comment</span>
                                </button>
                            </div>

                            {/* Write a comment section */}
                            {user && (
                                <form
                                    onSubmit={(e) => handleComment(e, post._id)}
                                    className="flex items-center space-x-2 mt-2"
                                >
                                    <input
                                        type="text"
                                        value={commentText[post._id] || ""} // Use the commentText for this post
                                        onChange={(e) =>
                                            setCommentText((prev) => ({
                                                ...prev,
                                                [post._id]: e.target.value,
                                            }))
                                        }
                                        placeholder="Write a comment..."
                                        className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D09966] bg-[#1E2A3B] text-white border-[#283D55]"
                                    />
                                    <button
                                        type="submit"
                                        className="text-[#CBD5E1] font-medium text-sm cursor-pointer"
                                        disabled={
                                            !commentText[post._id]?.trim()
                                        }
                                    >
                                        Post
                                    </button>
                                </form>
                            )}

                            {/* Comment Accordion */}
                            {showComments[post._id] && (
                                <div className="space-y-3 mt-2 border-t border-[#283D55] pt-2 max-h-64 overflow-y-auto">
                                    {comments
                                        .filter(
                                            (comment) =>
                                                comment.postId === post._id
                                        )
                                        .map((comment, index) => (
                                            <div
                                                key={index}
                                                className="flex space-x-2"
                                            >
                                                <div className="bg-[#283D55] rounded-lg px-3 py-2 flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-medium text-sm text-[#F7FAFC]">
                                                            {comment.user}
                                                        </h4>
                                                        <span className="text-xs text-[#CBD5E1]">
                                                            {
                                                                comment.create_date
                                                            }
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-[#F7FAFC]">
                                                        {comment.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
        </>
    );
};

export default PostCard;
