import React from 'react';

const skills = [
  { name: 'Python', icon: '🐍', color: 'from-green-500 to-emerald-500' },
  { name: 'Machine Learning', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
  { name: 'Artificial Intelligence (AI)', icon: '🧠', color: 'from-purple-500 to-pink-500' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-400' },
  { name: 'SQL', icon: '💾', color: 'from-orange-500 to-red-500' },
  { name: 'Node.js', icon: '🌐', color: 'from-green-600 to-teal-600' },
  { name: 'Express.js', icon: '🚀', color: 'from-gray-600 to-gray-400' },
  { name: 'MongoDB', icon: '🟢', color: 'from-green-400 to-emerald-400' },
  { name: 'MySQL', icon: '🗄️', color: 'from-blue-600 to-indigo-600' },
  { name: 'HTML, CSS, JavaScript', icon: '🌐', color: 'from-yellow-500 to-orange-500' },
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-16 relative"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
        borderRadius: '20px',
        margin: '2rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">🎓 Education</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing 3rd-year B.Tech in Information Technology at SAL Engineering & Technical Institute, Ahmedabad. Passionate about Python programming and data science.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">💼 Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Completed internships in AI and ML, gaining hands-on experience with frameworks like TensorFlow and scikit-learn. Also experienced in web development.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">🛠️ Skills</h3>
              <p className="text-gray-300 leading-relaxed">
                Proficient in Python, data structures, OOP, web development, and advanced AI/ML topics. Strong work ethic with continuous learning mindset.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">🎯 Goals</h3>
              <p className="text-gray-300 leading-relaxed">
                Aspire to contribute to collaborative teams and further develop expertise in data science and innovative technology solutions.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-semibold mb-6 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </div>
              </div>
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">💡 Fun Fact / Interest</h3>
          <p className="italic text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I love blending creativity with technology—when I'm not coding, I explore startup ideas, new innovations, and enjoy building projects that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
