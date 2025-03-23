// "use client";
import { useState, useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

const PostCard = () => {
  const [getPosts, setgetPosts] = useState([]);

  useEffect(() => {
    const fetchgetPosts = async () => {
      const response = await fetch('/api/post/posts');
      const json = await response.json();

      console.log('Fetched posts:', json);

      // Check if the response is valid and contains an array
      if (response.ok && Array.isArray(json)) {
        setgetPosts(json); // Set posts if it's an array
      } else if (json && Array.isArray(json.getPosts)) {
        // If the posts are inside a nested structure like json.getPosts
        setgetPosts(json.getPosts);
      } else {
        console.error('Error: Expected an array of posts, received:', json);
      }
    };
    fetchgetPosts();
  }, []);
  // Setting user to "LOGGED IN"
  const { user } = useAuthContext();
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      postId: 1,
      user: 'Jane Doe',
      text: 'Great post! Really enjoyed reading this.',
      create_date: '15m ago',
    },
  ]);

  const [showComments, setShowComments] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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
        user: 'You',
        text: commentText,
        create_date: 'Just now',
      };
      setComments([newComment, ...comments]);
      setCommentText('');
      setShowComments(true); // false mo to pag ayaw mo nakikita write comment
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {getPosts &&
        getPosts.map((getPost) => (
          <div key={getPost._id}>
            <div className="w-full bg-[#0A1A2F] p-6 shadow-md rounded-lg mb-5 hover:border-[#2D5F8A] border-[#1F2937] border-1">
              <div className="space-y-4">
                {/* Header with user info and options */}
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-bold text-[120%] text-[#30bffc]">
                      {getPost.user ? getPost.user.username : 'Deleted user'}
                    </h3>
                    <p className="text-xs text-[#CBD5E1]">date time</p>
                  </div>
                  <div className="relative">
                    <button
                      className="text-white p-1 rounded-full hover:bg-[#1E2A3B]"
                      onClick={toggleDropdown}
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
                    {showDropdown && (
                      <div className="absolute right-0 mt-2 w-32 bg-[#1E2A3B] rounded-md shadow-lg border border-[#283D55]">
                        <ul className="py-1">
                          <li className="px-4 py-2 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer">
                            Edit
                          </li>
                          <li className="px-4 py-2 text-m text-[#F7FAFC] hover:bg-[#283D55] cursor-pointer">
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Post content */}
                <p>{getPost.title}</p>
                <p className="text-[#F7FAFC] text-[0.95rem]">{getPost.body}</p>
              </div>

              {/* End of Post */}

              {/* Engagement stats */}
              <div className="flex justify-between text-sm text-[#CBD5E1] pt-2 border-t border-[#283D55]">
                <span>{likeCount} likes</span>
                <span>{comments.length} comments</span>
              </div>

              {/* Action buttons */}
              <div className="flex justify-between border-t border-[#283D55] border-b py-2">
                <button
                  className={`flex items-center space-x-2 px-4 py-1 rounded-md ${
                    isLiked
                      ? 'text-[#48c5f7]'
                      : 'text-[#94A3B8] hover:bg-[#2D5F8A]'
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
                <button
                  className="flex items-center space-x-2 px-4 py-1 rounded-md text-[#CBD5E1] hover:bg-[#2D5F8A]"
                  onClick={() => setShowComments(!showComments)}
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
                  onSubmit={handleComment}
                  className="flex items-center space-x-2"
                >
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
              )}

              {/* Comment Accordion */}
              {showComments && (
                <div className="space-y-3 mt-2 border-t border-[#283D55] pt-2 max-h-64 overflow-y-auto">
                  {comments.map((comment) => (
                    <div key={comment.postId} className="flex space-x-2">
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
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default PostCard;
