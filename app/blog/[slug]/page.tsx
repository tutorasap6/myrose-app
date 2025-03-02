'use client';

import React from 'react';
import Link from 'next/link';
import CommentSection from '@/app/components/CommentSection';

const post = {
  title: 'Building Scalable Web Applications with Next.js',
  content: `
    Next.js has revolutionized the way we build web applications, offering a powerful framework that combines the best of React with server-side rendering capabilities.

    ## Why Next.js?

    Next.js provides several advantages for modern web development:
    - Automatic code splitting for faster page loads
    - Server-side rendering out of the box
    - Simple API routes for backend functionality
    - Built-in CSS and Sass support
    - Automatic routing based on file system

    ## Best Practices

    1. Use proper code organization
    2. Implement caching strategies
    3. Optimize for performance
    4. Follow security guidelines
    5. Write maintainable code
  `,
  date: 'March 15, 2024',
  category: 'Web Development',
  author: {
    name: 'Gideon Mureithi',
    avatar: 'GM',
    role: 'Full Stack Developer'
  }
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#0f1624] text-white py-16">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#13ADC7] hover:text-[#0f8ca3] transition-colors mb-8"
          >
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-sm rounded-full bg-[#13ADC7]/10 text-[#13ADC7]">
                {post.category}
              </span>
              <span className="text-sm text-[#8892b0]">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-[#ccd6f6]">
              {post.title}
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#13ADC7] flex items-center justify-center text-white font-semibold">
                {post.author.avatar}
              </div>
              <div className="ml-4">
                <div className="font-semibold text-[#ccd6f6]">{post.author.name}</div>
                <div className="text-sm text-[#8892b0]">{post.author.role}</div>
              </div>
            </div>
          </header>

          <div className="prose prose-invert max-w-none mb-12">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-[#8892b0] mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <CommentSection postSlug="building-scalable-web-applications" />
        </article>
      </div>
    </main>
  );
} 