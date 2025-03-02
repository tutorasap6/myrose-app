'use client';

import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  text: string;
  rating: number;
  avatar: React.ReactNode;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-[#13ADC7]' : 'text-[#233554]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Barbara Wilson",
      position: "Marketing Director",
      text: "Gideon delivered an exceptional web application that transformed our online presence. His attention to detail and technical expertise were outstanding.",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Charlie Smith",
      position: "Business Owner",
      text: "Professional, efficient, and creative - Gideon is a talented developer who brings fresh ideas to every project. Could not ask for more!",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Roy Wang",
      position: "Startup Founder",
      text: "From concept to launch, Gideon was an invaluable partner. His technical skills and creative insights made all the difference in our projects success.",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Sarah Johnson",
      position: "E-commerce Manager",
      text: "The e-commerce platform Gideon built for us exceeded our expectations. The integration with payment systems was seamless and our sales have increased significantly.",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Michael Chen",
      position: "Tech Lead",
      text: "Great experience working with Gideon on our cloud infrastructure project. His DevOps expertise helped us streamline our deployment process significantly.",
      rating: 4,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Emma Davis",
      position: "Product Manager",
      text: "The custom software solution Gideon developed has dramatically improved our internal processes. His understanding of our business needs was impressive.",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "David Kim",
      position: "CTO",
      text: "Gideon\u2019s expertise in API development and integration was crucial for our project. While there were some minor delays, the end result was solid.",
      rating: 4,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      name: "Lisa Thompson",
      position: "Digital Marketing Head",
      text: "The website Gideon created has significantly improved our conversion rates. His focus on performance and user experience really shows in the final product.",
      rating: 5,
      avatar: (
        <div className="w-16 h-16 rounded-full bg-[#13ADC7]/10 flex items-center justify-center text-[#13ADC7]">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f1624] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
            Testimonials
          </h1>
          <p className="text-xl text-[#8892b0]">
            what Customers Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-[#112240] hover:bg-[#233554] transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {testimonial.avatar}
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#ccd6f6]">{testimonial.name}</h3>
                  <p className="text-[#13ADC7]">{testimonial.position}</p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <blockquote className="relative">
                <span className="text-4xl text-[#13ADC7]/20 absolute -top-2 -left-2">"</span>
                <p className="text-[#8892b0] italic pl-4">
                  {testimonial.text}
                </p>
                <span className="text-4xl text-[#13ADC7]/20 absolute -bottom-4 -right-2">"</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 