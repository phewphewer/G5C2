import FeaturedDisplay from "./FeaturedDisplay.jsx";
import PostForm from "../../../components/posting/PostForm.jsx";
import PostCard from "../../../components/posting/PostCard";
import { useState, useEffect, useContext } from "react"; // removed React , after import
import { AuthContext } from "../../../context/AuthContext.jsx";

export default function PostPage() {
    const { user } = useContext(AuthContext);
    const [sortBy, setSortBy] = useState("Sort by");
    const [isFeatured, setIsFeatured] = useState(false);
    const [posts, setPosts] = useState([]);
    const [sortedPosts, setSortedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);

            // Use real API data
            const endpoint = user?.token
                ? "/api/post/posts" // Authenticated endpoint
                : "/api/post/public"; // Public endpoint
            const response = await fetch(endpoint, {
                headers: user?.token
                    ? { Authorization: `Bearer ${user.token}` }
                    : {},
            });

            if (response.ok) {
                const data = await response.json();
                const postsArray = data.getPosts || []; // Ensure posts are in an array format
                setPosts(postsArray);
                setSortedPosts(postsArray); // Initialize sorted posts
                console.log("Fetched live posts:", postsArray);
            } else {
                throw new Error("Failed to fetch posts");
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSort = (sortType, postsToSort = posts) => {
        console.group(`[Sorting] ${sortType}`);
        console.log("Original posts:", postsToSort);

        if (["Recent", "Popular", "Featured"].includes(sortType)) {
            setSortBy("Sort by");
        } else {
            setSortBy(sortType);
        }

        // Create a new array reference for immutability
        let sorted = [...postsToSort];
        const now = new Date();
        console.log("Current time:", now.toISOString());

        switch (sortType) {
            case "Recent":
                console.log("Applying recent sort (newest first)");
                sorted.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                break;

            case "Featured":
                console.log("Filtering featured posts");
                sorted = sorted.filter((post) => {
                    const isFeatured = post.isFeatured === true;
                    if (!isFeatured)
                        console.log(`Post ${post._id} not featured`);
                    return isFeatured;
                });
                break;

            case "Popular":
                console.log("Sorting by popularity");
                sorted.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
                break;

            case "Week":
                console.log("Filtering posts from last 7 days");
                sorted = sorted
                    .filter((post) => {
                        const postDate = new Date(post.createdAt);
                        if (isNaN(postDate)) {
                            console.warn(
                                "Invalid date in post:",
                                post._id,
                                post.createdAt
                            );
                            return false;
                        }

                        const diffMs = now - postDate;
                        const diffDays = diffMs / (1000 * 60 * 60 * 24);
                        console.log(
                            `Post ${post._id} is ${diffDays.toFixed(
                                1
                            )} days old`
                        );

                        return diffMs <= 7 * 24 * 60 * 60 * 1000 && diffMs >= 0; // Past 7 days only
                    })
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                break;

            case "Month":
                console.log("Filtering posts from last 30 days");
                sorted = sorted
                    .filter((post) => {
                        const postDate = new Date(post.createdAt);
                        const diffMs = now - postDate;
                        return (
                            diffMs <= 30 * 24 * 60 * 60 * 1000 && diffMs >= 0
                        );
                    })
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                break;

            case "Year":
                console.log("Filtering posts from last 365 days");
                sorted = sorted
                    .filter((post) => {
                        const postDate = new Date(post.createdAt);
                        const diffMs = now - postDate;
                        return (
                            diffMs <= 365 * 24 * 60 * 60 * 1000 && diffMs >= 0
                        );
                    })
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                break;

            default:
                console.log("Default sorting (newest first)");
                sorted.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
        }

        console.log("Sorted results:", sorted);
        console.groupEnd();

        // Update state with the new sorted array
        setSortedPosts(sorted.length > 0 ? sorted : postsToSort);
    };

    const handlePostCreated = (newPost) => {
        console.log("New post created:", newPost);

        const processedPost = {
            ...newPost,
            likeCount: newPost.likeCount || 0,
            commentCount: newPost.commentCount || 0,
            isLiked: newPost.isLiked || false,
            user: newPost.user || {
                _id: user._id,
                username: user.username || user.email,
            },
        };

        const updatedPosts = [processedPost, ...posts];
        setPosts(updatedPosts);

        handleSort(sortBy, updatedPosts);
    };

    const handlePostsChange = (updatedPosts) => {
        setPosts(updatedPosts);
        handleSort(sortBy, updatedPosts);
    };

    useEffect(() => {
        fetchPosts(); // Initial fetch of posts

        const intervalId = setInterval(fetchPosts, 900000);
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means it runs once when the component mounts

    if (loading)
        return <p className="text-center py-8 text-white">Loading posts...</p>;
    if (error)
        return <p className="text-center py-8 text-red-500">Error: {error}</p>;

    return (
        <div className="min-h-screen bg-[#050E1A] text-white pt-17 flex">
            {error && (
                <div className="fixed top-20 right-4 bg-red-600 text-white p-4 rounded">
                    {error}
                    <button onClick={() => setError(null)} className="ml-4">
                        ×
                    </button>
                </div>
            )}
            {/* Sorting and filter options */}
            <div className="flex-1">
                <div className="flex justify-between items-center p-3 rounded-t-md space-x-4">
                    <div className="flex space-x-5">
                        <button
                            className="p-2 bg-[#1E3A57] hover:bg-[#172A42] rounded-full border-1 border-[#2D5F8A] hover:text-[]"
                            onClick={() => handleSort("Recent")}
                        >
                            Recent
                        </button>
                        <button
                            className="p-2 bg-[#1E3A57] rounded-full hover:bg-[#172A42] border-1 border-[#2D5F8A] hover:text-[]"
                            onClick={() => handleSort("Featured")}
                        >
                            Featured
                        </button>
                        <button
                            className="p-2 bg-[#1E3A57] rounded-full hover:bg-[#172A42] border-1 border-[#2D5F8A] hover:text-[]"
                            onClick={() => handleSort("Popular")}
                        >
                            Popular
                        </button>
                    </div>
                    <select
                        className="p-2 bg-[#1E3A57] rounded border-1 border-[#2D5F8A]"
                        value={sortBy}
                        onChange={(e) => handleSort(e.target.value)}
                    >
                        <option value="Sort by" disabled>
                            Sort by
                        </option>
                        <option value="Week">Sort by Week</option>
                        <option value="Month">Sort by Month</option>
                        <option value="Year">Sort by Year</option>
                    </select>
                </div>

                {/* Post Cards and Featured Section */}
                {/* Left - Post Cards */}
                <div className="flex">
                    {user && (
                        <>
                            <div className="flex-1 p-4">
                                <div className="flex-1 p-4">
                                    <PostForm
                                        onPostCreated={handlePostCreated}
                                    />
                                </div>
                                <div className="flex-1 p-4">
                                    <PostCard
                                        posts={
                                            sortedPosts.length > 0
                                                ? sortedPosts
                                                : posts
                                        }
                                        onPostsChange={handlePostsChange}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {!user && (
                        <div className="flex-1 p-4">
                            <PostCard
                                posts={sortedPosts}
                                onPostsChange={handlePostsChange}
                            />
                        </div>
                    )}

                    {/* Right - Featured Section (Sticky) */}
                    <FeaturedDisplay />
                </div>
            </div>
        </div>
    );
}
