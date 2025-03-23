import FeaturedDisplay from "./FeaturedDisplay.jsx";
import PostForm from "../../../components/posting/PostForm.jsx";
import PostCard from "../../../components/posting/PostCard";
import { useState, useEffect, useContext } from "react"; // removed React , after import
import { AuthContext } from "../../../context/AuthContext.jsx";

export default function PostPage() {
  const { user } = useContext(AuthContext);
  const [sortBy, setSortBy] = useState("Sort by");
  const [isFeatured, setIsFeatured] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Post 1",
      timestamp: "2025-03-12",
      likes: 10,
      isFeatured: true,
    },
    {
      id: 2,
      content: "Post 2",
      timestamp: "2025-02-21",
      likes: 20,
      isFeatured: false,
    },
    {
      id: 3,
      content: "Post 3",
      timestamp: "2025-10-03",
      likes: 15,
      isFeatured: false,
    },
    {
      id: 4,
      content: "Post 4",
      timestamp: "2023-10-04",
      likes: 25,
      isFeatured: false,
    },
    {
      id: 5,
      content: "Post 5",
      timestamp: "2023-10-05",
      likes: 30,
      isFeatured: false,
    },
  ]);
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/posts/poll");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data); // Update posts state with the fetched data
    } catch (error) {
      setError(error.message); // Set error message if the fetch fails
      console.log(setError);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleSort = (sortType) => {
    console.log(`Sort by ${sortType}`);
    // setSortBy(sortType);
    let sorted = [...posts];
    const now = new Date();

    switch (sortType) {
      case "Recent":
        sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
      case "Featured":
        sorted = sorted.filter((post) => post.isFeatured);
        break;
      case "Popular":
        sorted.sort((a, b) => b.likes - a.likes);
        break;
      case "Week":
        sorted = sorted.filter((post) => {
          const postDate = new Date(post.timestamp);
          const diffTime = Math.abs(now - postDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 7;
        });
        break;
      case "Month":
        sorted = sorted.filter((post) => {
          const postDate = new Date(post.timestamp);
          const diffTime = Math.abs(now - postDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 30;
        });
        break;
      case "Year":
        sorted = sorted.filter((post) => {
          const postDate = new Date(post.timestamp);
          const diffTime = Math.abs(now - postDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays <= 365;
        });
        break;
      default:
        sorted.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        break;
    }

    setSortedPosts(sorted);
  };

  useEffect(() => {
    fetchPosts(); // Initial fetch of posts
    handleSort("Recent");
    const intervalId = setInterval(fetchPosts, 900000);
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

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
              <div>
                <div className="flex-1 p-4 w-full">
                  <PostForm />
                </div>
                <div className="flex-1 p-4">
                  {sortedPosts.map((post) => (
                    <PostCard key={post.id} content={post.content} />
                  ))}
                </div>
              </div>
            </>
          )}
          {!user && (
            <div className="flex-1 p-4">
              {sortedPosts.map((post) => (
                <PostCard key={post.id} content={post.content} />
              ))}
            </div>
          )}

          {/* Right - Featured Section (Sticky) */}
          <FeaturedDisplay />
        </div>
      </div>
    </div>
  );
}
