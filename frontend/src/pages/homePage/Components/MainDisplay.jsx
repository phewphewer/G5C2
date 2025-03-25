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
            const endpoint =
                user && user.token ? "/api/post/posts" : "/api/post/public";
            const response = await fetch(endpoint, {
                headers: user?.token
                    ? { Authorization: `Bearer ${user.token}` }
                    : {},
            });

            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data = await response.json();
            const postsArray = data.getPosts || [];

            setPosts(postsArray); // Update posts state with the fetched data
            handleSort("Recent", postsArray); // Sort the newly fetched posts
        } catch (error) {
            setError(error.message); // Set error message if the fetch fails
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false); // End loading
        }
    };

    const handleSort = (sortType, postsToSort = posts) => {
        console.log(`Sort by ${sortType}`);
        setSortBy(sortType);
        let sorted = [...postsToSort];
        const now = new Date();

        switch (sortType) {
            case "Recent":
                sorted.sort(
                    (a, b) =>
                        new Date(b.createdAt || b.timestamp) -
                        new Date(a.createdAt || a.timestamp)
                );
                break;
            case "Featured":
                sorted = sorted.filter((post) => post.isFeatured);
                break;
            case "Popular":
                sorted.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
                break;
            case "Week":
                sorted = sorted.filter((post) => {
                    const postDate = new Date(post.createdAt || post.timestamp);
                    const diffTime = Math.abs(now - postDate);
                    const diffDays = Math.ceil(
                        diffTime / (1000 * 60 * 60 * 24)
                    );
                    return diffDays <= 7;
                });
                break;
            case "Month":
                sorted = sorted.filter((post) => {
                    const postDate = new Date(post.createdAt || post.timestamp);
                    const diffTime = Math.abs(now - postDate);
                    const diffDays = Math.ceil(
                        diffTime / (1000 * 60 * 60 * 24)
                    );
                    return diffDays <= 30;
                });
                break;
            case "Year":
                sorted = sorted.filter((post) => {
                    const postDate = new Date(post.createdAt || post.timestamp);
                    const diffTime = Math.abs(now - postDate);
                    const diffDays = Math.ceil(
                        diffTime / (1000 * 60 * 60 * 24)
                    );
                    return diffDays <= 365;
                });
                break;
            default:
                sorted.sort(
                    (a, b) =>
                        new Date(b.createdAt || b.timestamp) -
                        new Date(a.createdAt || a.timestamp)
                );
                break;
        }

        setSortedPosts(sorted);
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
                                        posts={sortedPosts}
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
