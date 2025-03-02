'use client';

import React from 'react';

export default function Resume() {
  const resume = {
    education: [
      {
        degree: 'Mount Kenya University',
        field: 'Bachelors of Science Information Technology',
        period: '2018 - 2023',
        description: 'A comprehensive program covering software development, database management, networking, and information systems. Gained strong foundation in both theoretical concepts and practical applications.'
      }
    ],
    experience: [
      {
        title: 'Founder & Lead Developer',
        company: 'PyShell IT consultancy Ltd',
        period: '2023 - Present',
        description: 'I lead the company with a visionary approach, overseeing all aspects of business operations and strategy. I drive innovation, manage key projects, and foster a collaborative environment to ensure the success of our cutting-edge software solutions.'
      },
      {
        title: 'FullStack Developer',
        company: 'Freelance',
        period: '2015 - 2018',
        description: 'Utilizing my expertise in front-end and back-end technologies, I created seamless and efficient web applications. I specialized in JavaScript, React, Node.js, and Express.js, delivering robust solutions that met clients specific needs.'
      },
      {
        title: 'Frontend Developer',
        company: 'Freelance',
        period: '2015 - 2023',
        description: 'I focused on crafting engaging and responsive user interfaces. I leveraged my skills in HTML, CSS, and JavaScript frameworks like React & NextJs to build visually appealing and highly functional websites.'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Resume
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            my Story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Education</h2>
            <div className="space-y-8">
              {resume.education.map((edu, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <div className="text-purple-400 mb-2">{edu.field}</div>
                  <div className="text-gray-400 mb-4">{edu.period}</div>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8">Experience</h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <div className="text-purple-400 mb-2">{exp.company}</div>
                  <div className="text-gray-400 mb-4">{exp.period}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 