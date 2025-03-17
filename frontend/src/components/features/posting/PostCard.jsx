import React, { useState } from "react";

const PostCard = () => {
  const [likeCount, setLikeCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    {
      postId: 1,
      user: "Jane Doe",
      text: "Great post! Really enjoyed reading this.",
      create_date: "15m ago",
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
        postId: comments.length + 1,
        user: "You",
        text: commentText,
        create_date: "Just now",
      };
      setComments([newComment, ...comments]);
      setCommentText("");
    }
  };

  return (
    <div className="w-full bg-[#0A1A2F] p-6 shadow-md rounded-lg mb-5 hover:border-[#374151] border-[#1F2937] border-1 ">
      <div className="space-y-4">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <div>
            {/* {users.map((key, value) => {
              <h3 key="user.id" className="font-semibold text-[#28AAE1]">
                `${users.username}`
              </h3>;
              <p className="text-xs text-[#CBD5E1]">Posted 2 hours ago</p>
            })} */}
            <h3 className="font-bold text-[120%] text-[#30bffc]">
              Alex Johnson
            </h3>
            <p className="text-xs text-[#CBD5E1]">Posted 2 hours ago</p>
          </div>
          <div className="ml-auto">
            {/* OPTIONS BUTTON */}
            <button className="text-[#CBD5E1] hover:text-[#F7FAFC]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            {/* OPTIONS BUTTON */}
          </div>
        </div>

        {/* Post Content */}
        {/* {post.map(() => {
          <p key="post.id" className="text-[#F7FAFC] text-[0.95rem]">
            Just finished working on an amazing project with the team! Really
            proud of what we've accomplished over the last few weeks. Looking
            forward to sharing more details soon. <b>#teamwork #productivity</b>
          </p>})} */}
        <p key="post.id" className="text-[#F7FAFC] text-[0.95rem]">
          Just finished working on an amazing project with the team! Really
          proud of what we've accomplished over the last few weeks. Looking
          forward to sharing more details soon. <b>#teamwork #productivity</b>
        </p>

        {/* Engagement Stats */}
        <div className="flex justify-between text-sm text-[#CBD5E1] pt-2 border-t border-[#283D55]">
          <span>{likeCount} likes</span>
          <span>{comments.length} comments</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between border-t border-[#283D55] border-b py-2">
          <button
            className={`flex items-center space-x-2 px-4 py-1 rounded-md ${
              isLiked ? "text-[#94A3B8]" : "text-[#48c5f7] hover:bg-[#2D5F8A]"
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
          <button className="flex items-center space-x-2 px-4 py-1 rounded-md text-[#CBD5E1] hover:bg-[#2D5F8A]">
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

        {/* Comment Section */}
        <div className="space-y-4">
          {/* Comment Input */}

          <form
            onSubmit={handleComment}
            className="flex items-center space-x-2"
          >
            {/* {users.map((key, value) => {
              <
            })} */}
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D09966]"
            />
            <button
              type="submit"
              className="text-[#CBD5E1] font-medium text-sm"
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
                    <h4 className="font-medium text-sm text-[#F7FAFC]">
                      {comment.user}
                    </h4>
                    <span className="text-xs text-[#CBD5E1]">
                      {comment.create_date}
                    </span>
                  </div>
                  <p className="text-sm text-[#F7FAFC]">{comment.text}</p>
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
