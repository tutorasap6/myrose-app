'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to create performant and scalable web applications using Next.js and React. Discover best practices for server-side rendering and API routes.",
    date: "March 15, 2024",
    category: "Web Development",
    readTime: "5 min read",
    slug: "building-scalable-web-applications"
  },
  {
    title: "Modern DevOps Practices for Small Teams",
    excerpt: "Explore essential DevOps practices that small development teams can implement to improve their deployment process and code quality.",
    date: "March 10, 2024",
    category: "DevOps",
    readTime: "4 min read",
    slug: "modern-devops-practices"
  },
  {
    title: "Integrating Payment Gateways in React Applications",
    excerpt: "A comprehensive guide to integrating popular payment gateways like M-Pesa, Stripe, and PayPal in your React applications.",
    date: "March 5, 2024",
    category: "Integration",
    readTime: "6 min read",
    slug: "payment-gateway-integration"
  },
  {
    title: "Optimizing Database Performance in Web Apps",
    excerpt: "Learn techniques and best practices for optimizing database performance in web applications. From indexing to query optimization.",
    date: "February 28, 2024",
    category: "Database",
    readTime: "7 min read",
    slug: "database-performance-optimization"
  },
  {
    title: "Creating Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to build beautiful and responsive user interfaces using Tailwind CSS. Tips and tricks for efficient development.",
    date: "February 20, 2024",
    category: "UI/UX",
    readTime: "4 min read",
    slug: "responsive-ui-tailwind"
  },
  {
    title: "Securing Your Node.js Applications",
    excerpt: "Essential security practices for Node.js applications. Learn how to protect your web applications from common vulnerabilities.",
    date: "February 15, 2024",
    category: "Security",
    readTime: "5 min read",
    slug: "nodejs-security"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#0f1624] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
            Blog
          </h1>
          <p className="text-xl text-[#8892b0]">
            Insights and Articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={index}
              className="group"
            >
              <article className="h-full p-8 rounded-lg bg-[#112240] hover:bg-[#233554] transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#13ADC7]/10 text-[#13ADC7]">
                    {post.category}
                  </span>
                  <span className="text-sm text-[#8892b0]">{post.date}</span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 text-[#ccd6f6] group-hover:text-[#13ADC7] transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-[#8892b0] mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-[#8892b0]">
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  {post.readTime}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 