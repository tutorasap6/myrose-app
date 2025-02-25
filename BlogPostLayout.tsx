'use client';

import React from 'react';
import Link from 'next/link';
import CommentSection from '@/app/components/CommentSection';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  children: React.ReactNode;
  slug: string;
}

export default function BlogPostLayout({
  title,
  date,
  category,
  author,
  children,
  slug
}: BlogPostLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0f1624] text-white py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#13ADC7] hover:text-[#0f8ca3] transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-[#13ADC7]/10 text-[#13ADC7]">
                {category}
              </span>
              <span className="text-sm text-[#8892b0]">{date}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-[#ccd6f6]">
              {title}
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#13ADC7] flex items-center justify-center text-white font-semibold">
                {author.avatar}
              </div>
              <div className="ml-4">
                <div className="font-semibold text-[#ccd6f6]">
                  {author.name}
                </div>
                <div className="text-sm text-[#8892b0]">{author.role}</div>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none prose-pre:bg-[#112240] prose-pre:border prose-pre:border-[#233554] prose-code:text-[#13ADC7] mb-12">
            {children}
          </div>

          <CommentSection postSlug={slug} />
        </article>
      </div>
    </main>
  );
} 