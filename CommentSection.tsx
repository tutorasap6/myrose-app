'use client';

import React, { useState } from 'react';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  isApproved: boolean;
}

interface CommentSectionProps {
  postSlug: string;
}

export default function CommentSection({ postSlug }: CommentSectionProps) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: {
        name: 'John Doe',
        avatar: 'JD',
      },
      content: 'Great article! Very informative and well-written.',
      date: 'March 20, 2024',
      isApproved: true,
    },
    {
      id: '2',
      user: {
        name: 'Jane Smith',
        avatar: 'JS',
      },
      content: 'This helped me understand the concept better. Thanks for sharing!',
      date: 'March 19, 2024',
      isApproved: true,
    },
  ]);

  const handleSignIn = () => {
    // TODO: Implement actual authentication
    setIsSignedIn(true);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      user: {
        name: 'Current User',
        avatar: 'CU',
      },
      content: comment,
      date: new Date().toLocaleDateString(),
      isApproved: false,
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-[#ccd6f6]">Comments</h2>

      {/* Comments List */}
      <div className="space-y-6 mb-8">
        {comments
          .filter((comment) => comment.isApproved)
          .map((comment) => (
            <div
              key={comment.id}
              className="p-6 rounded-lg bg-[#112240] border border-[#233554]"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#13ADC7] flex items-center justify-center text-white font-semibold">
                  {comment.user.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-[#ccd6f6]">
                    {comment.user.name}
                  </div>
                  <div className="text-sm text-[#8892b0]">{comment.date}</div>
                </div>
              </div>
              <p className="text-[#8892b0]">{comment.content}</p>
            </div>
          ))}
      </div>

      {/* Comment Form */}
      {!isSignedIn ? (
        <div className="text-center p-6 rounded-lg bg-[#112240] border border-[#233554]">
          <p className="text-[#8892b0] mb-4">
            Please sign in to leave a comment
          </p>
          <button
            onClick={handleSignIn}
            className="px-6 py-2 bg-[#13ADC7] hover:bg-[#0f8ca3] rounded-full transition-colors"
          >
            Sign In
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-4 rounded-lg bg-[#112240] border border-[#233554] text-white placeholder-[#8892b0] focus:outline-none focus:border-[#13ADC7]"
            rows={4}
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#8892b0]">
              Your comment will be visible after approval
            </p>
            <button
              type="submit"
              className="px-6 py-2 bg-[#13ADC7] hover:bg-[#0f8ca3] rounded-full transition-colors"
            >
              Submit Comment
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 