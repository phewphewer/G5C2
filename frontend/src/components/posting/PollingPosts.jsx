// src/components/PollingPosts.js

import React, { useState, useEffect } from "react";

const PollingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch posts from backend
  const fetchPosts = async () => {
    try {
      setLoading(true); // Start loading
      const response = await fetch("/api/posts/poll"); // Adjust URL if necessary
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data); // Update posts state with the fetched data
    } catch (error) {
      setError(error.message); // Set error message if the fetch fails
    } finally {
      setLoading(false); // End loading
    }
  };

  // UseEffect to start polling when component mounts
  useEffect(() => {
    // Fetch posts when the component mounts
    fetchPosts();

    // Set up polling every 5 seconds (5000ms)
    const intervalId = setInterval(fetchPosts, 900000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollingPosts;
