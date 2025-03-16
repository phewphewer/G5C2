import React, { useState } from "react";

const PostCard = () => {
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Jane Doe",
      avatar:
        "https://static.vecteezy.com/system/resources/previews/005/419/157/non_2x/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-illustration-on-a-white-isolated-background-vector.jpg",
      text: "Great post! Really enjoyed reading this.",
      time: "15m ago",
    },
    {
      id: 2,
      user: "John Smith",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDIqra6CgB1b6S8-6Dmx1upVbXAPo6zAfFg&s",
      text: "Thanks for sharing this!",
      time: "32m ago",
    },
  ]);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: "You",
        avatar:
          "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        text: commentText,
        time: "Just now",
      };
      setComments([newComment, ...comments]);
      setCommentText("");
    }
  };

  const handleShare = () => {
    alert("Post shared successfully!");
  };

  return (
    <div className="w-full bg-[#0A1A2F] p-6 shadow-md rounded-lg mb-5">
      <div className="space-y-4">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
            alt="User Avatar"
            className="rounded-full h-10 w-10"
          />
          <div>
            <h3 className="font-semibold text-[#E4D8BE]">Alex Johnson</h3>
            <p className="text-xs text-[#D09966]">Posted 2 hours ago</p>
          </div>
          <div className="ml-auto">
            <button className="text-[#D09966] hover:text-[#E4D8BE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Post Content */}
        <div className="post-content">
          <p className="text-[#E4D8BE]">
            Just finished working on an amazing project with the team! Really
            proud of what we've accomplished over the last few weeks. Looking
            forward to sharing more details soon. <b>#teamwork #productivity</b>
          </p>
          <img
            src="https://www.psychologs.com/wp-content/uploads/2023/07/The-Benefits-of-Happy-Family-for-Your-Mental-Health.jpg"
            alt="Post Image"
            className="mt-3 rounded-lg w-full object-cover"
          />
        </div>

        {/* Engagement Stats */}
        <div className="flex justify-between text-sm text-[#D09966] pt-2 border-t border-[#283D55]">
          <span>{likeCount} likes</span>
          <span>{comments.length} comments</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between border-t border-[#283D55] border-b py-2">
          <button
            className={`flex items-center space-x-2 px-4 py-1 rounded-md ${
              isLiked ? "text-[#D09966]" : "text-[#6D513E] hover:bg-[#E4D8BE]"
            }`}
            onClick={handleLike}
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
          <button className="flex items-center space-x-2 px-4 py-1 rounded-md text-[#D09966] hover:bg-[#E4D8BE]">
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
          <button
            className="flex items-center space-x-2 px-4 py-1 rounded-md text-[#D09966] hover:bg-[#E4D8BE]"
            onClick={handleShare}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>Share</span>
          </button>
        </div>

        {/* Comment Section */}
        <div className="space-y-4">
          {/* Comment Input */}
          <form
            onSubmit={handleComment}
            className="flex items-center space-x-2"
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Your Avatar"
              className="rounded-full h-8 w-8"
            />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D09966]"
            />
            <button
              type="submit"
              className="text-[#D09966] font-medium text-sm"
              disabled={!commentText.trim()}
            >
              Post
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-2">
                <img
                  src={comment.avatar}
                  alt={`${comment.user}'s avatar`}
                  className="rounded-full h-8 w-8 mt-1"
                />
                <div className="bg-[#283D55] rounded-lg px-3 py-2 flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-sm text-[#E4D8BE]">
                      {comment.user}
                    </h4>
                    <span className="text-xs text-[#D09966]">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-sm text-[#E4D8BE]">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
