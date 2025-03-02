import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Redux/Context API', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 95 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js/Express', level: 90 },
        { name: 'Python/Django', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 90 }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS Services', level: 85 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux/Unix', level: 90 },
        { name: 'Jest/Testing', level: 85 }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are my technical skills and proficiency levels in various technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-lg">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-pink-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-8">Additional Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile/Scrum',
              'UI/UX Design',
              'SEO Optimization',
              'Performance Optimization',
              'Technical Writing',
              'Problem Solving',
              'Team Leadership',
              'Project Management'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 