import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'QRetrieve – Lost & Found Tracker System',
    description: 'React, Node.js, MySQL, QR Code Integration.',
    category: 'Web Dev',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🔍',
    tech: ['React', 'Node.js', 'MySQL', 'QR Code']
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
    title: 'Stock Price Prediction System',
    description: 'Python, Pandas, scikit-learn, Machine Learning regression models, Data Visualization.',
    category: 'Data Science',
    gradient: 'from-green-500 to-emerald-500',
    icon: '📈',
    tech: ['Python', 'Pandas', 'scikit-learn', 'ML']
  },
  {
    id: 4,
    title: 'Portfolio Website (This Website)',
    description: 'React, TailwindCSS, Node.js, Responsive Web Design.',
    category: 'Web Dev',
    gradient: 'from-orange-500 to-red-500',
    icon: '🌐',
    tech: ['React', 'TailwindCSS', 'Node.js', 'Responsive']
  },
];

const categories = ['All', 'Web Dev', 'Data Science'];

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
      className="max-w-7xl mx-auto px-4 py-16 relative"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        borderRadius: '20px',
        margin: '2rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-20 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Explore my latest projects showcasing expertise in web development, data science, and machine learning
        </p>

        {/* Enhanced Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`group relative px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
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
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 text-cyan-300 rounded-full text-sm font-medium border border-gray-600/50 group-hover:border-cyan-500/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
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
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Want to see more?</h3>
            <p className="text-gray-300 mb-6">Check out my GitHub for additional projects and contributions</p>
            <a
              href="https://github.com/Hiralsathwara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
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
