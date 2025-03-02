'use client';

import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    icon: (
      <svg className="w-16 h-16 text-[#13ADC7] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    icon: (
      <svg className="w-16 h-16 text-[#13ADC7] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application',
    icon: (
      <svg className="w-16 h-16 text-[#13ADC7] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    tags: ['React Native', 'Firebase'],
    link: '#'
  },
  {
    title: 'AI Chat Interface',
    description: 'Modern chat interface with AI integration',
    icon: (
      <svg className="w-16 h-16 text-[#13ADC7] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    tags: ['Python', 'TensorFlow', 'React'],
    link: '#'
  }
];

export default function Works() {
  return (
    <main className="min-h-screen bg-[#0f1624] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#13ADC7] to-[#945DD6]">
            Portfolio
          </h1>
          <p className="text-xl text-[#8892b0]">
            my Cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-[#112240] hover:bg-[#233554] transition-all duration-300"
            >
              <div className="flex flex-col items-center md:items-start">
                {project.icon}
                <h3 className="text-2xl font-semibold mb-3 text-[#ccd6f6]">{project.title}</h3>
                <p className="text-[#8892b0] mb-4 text-center md:text-left">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#13ADC7]/10 rounded-full text-sm text-[#13ADC7]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-[#13ADC7] hover:text-[#64ffda] transition-colors"
                >
                  View Project
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 