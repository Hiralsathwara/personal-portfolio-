import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'AIVA - Desktop  Assistant',
    description: 'Python, Speech Recognition, Natural Language Processing, Web Scraping, Task Automation.',
    category: 'machine learning',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🤖',
    tech: ['Python', 'Speech Recognition', 'NLP', 'task automation']
  },
  {
    id: 2,
    title: 'Emotions-Based Music Recommendation System',
    description: 'Python, OpenCV (Facial Emotion Recognition), Machine Learning, Spotify API.',
    category: 'Data Science',
    gradient: 'from-purple-500 to-pink-500',
    icon: '🎵',
    tech: ['Python', 'OpenCV', 'ML', 'Spotify API']
  },
   {
    id: 3,
    title: 'Greenify ',
    description: 'Python, Pandas, scikit-learn, Machine Learning regression models, Data Visualization.',
    category: 'machine learning',
    gradient: 'from-green-500 to-emerald-500',
    icon: '🌿',
    tech: ['Data Science', 'Deep Learning', 'Satellite Data', 'ML','Streamlit']
  },
  {
    id: 4,
    title: 'Stock Price Prediction System',
    description: 'Python, Pandas, scikit-learn, Machine Learning regression models, Data Visualization.',
    category: 'Data Science',
    gradient: 'from-green-500 to-emerald-500',
    icon: '📈',
    tech: ['Python', 'Pandas', 'scikit-learn', 'ML']
  },
  {
    id: 5,
    title: 'Portfolio Website (This Website)',
    description: 'React, TailwindCSS, Node.js, Responsive Web Design.',
    category: 'Web Dev',
    gradient: 'from-orange-500 to-red-500',
    icon: '🌐',
    tech: ['React', 'TailwindCSS', 'Node.js', 'Responsive']
  },
];

const categories = ['All', 'Web Dev', 'Data Science', 'machine learning', ];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 py-12 sm:py-16 relative sm:mx-auto sm:rounded-2xl sm:m-2 lg:m-4 lg:py-16"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        borderRadius: '20px',
        margin: '0.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-3xl">
            Projects
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-lg max-w-2xl mx-auto px-2">
          Explore my latest projects showcasing expertise in web development, data science, and machine learning
        </p>

        {/* Enhanced Filter Buttons */}
        <div className="flex justify-center mb-8 sm:mb-12 gap-2 sm:gap-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-base whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 border border-gray-700/50 hover:border-cyan-500/30'
              }`}
            >
              <span className="relative z-10">{cat}</span>
              {filter !== cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 rounded-full group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Project Cards */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Icon */}
              <div className="text-2xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-xs sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-gray-700/50 text-cyan-300 rounded-full text-xs sm:text-sm font-medium border border-gray-600/50 group-hover:border-cyan-500/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-bold ${
                  project.category === 'Web Dev'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {project.category}
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`}></div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 -z-10 blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-8 border border-gray-700/50 inline-block mx-4">
            <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-cyan-400">Want to see more?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Check out my GitHub for additional projects and contributions</p>
            <a
              href="https://github.com/Hiralsathwara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
