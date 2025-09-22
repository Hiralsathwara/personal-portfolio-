import React from 'react';

const education = [
  {
    institution: 'Gujarat Technological University (GTU)',
    degree: 'B.Tech Information Technology',
    period: '2024 – 2027',
    icon: '🎓',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    institution: 'SAL Engineering & Technical Institute',
    degree: 'B.Tech Information Technology',
    period: '2024 – 2027',
    icon: '🏫',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    institution: 'Gujarat Technological University (GTU)',
    degree: 'Diploma in Information Technology',
    period: '2021 – 2024',
    icon: '📜',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    institution: 'Government Girls Polytechnic, Ahmedabad',
    degree: 'Diploma IT',
    period: 'Sept 2021',
    icon: '🏛️',
    gradient: 'from-orange-500 to-red-500'
  },
];

const experience = [
  {
    company: 'InfoLabz',
    role: 'Intern',
    period: 'July 2023 – Aug 2023, Navrangpura',
    details: 'Hands-on experience in ML frameworks (TensorFlow, scikit-learn), deep learning (CNN, RNN), collaborative teamwork.',
    icon: '🤖',
    gradient: 'from-cyan-500 to-blue-500',
    skills: ['TensorFlow', 'scikit-learn', 'CNN', 'RNN']
  },
  {
    company: 'Techno IT Hub',
    role: 'Intern',
    period: 'Sept 2022 – May 2023, Ahmedabad',
    details: 'Learned HTML, CSS, JavaScript, web design, created static websites, worked on real projects.',
    icon: '💻',
    gradient: 'from-purple-500 to-indigo-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Design']
  },
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="max-w-7xl mx-auto px-4 py-16 relative"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
        borderRadius: '20px',
        margin: '2rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-16 left-16 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resume & Experience
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-8 text-cyan-400 flex items-center">
                <span className="mr-3">🎓</span>
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-cyan-300 font-medium mb-1">{edu.degree}</p>
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                      </div>
                    </div>
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-8 text-purple-400 flex items-center">
                <span className="mr-3">💼</span>
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {exp.company}
                        </h4>
                        <p className="text-purple-300 font-medium mb-1">{exp.role}</p>
                        <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.details}</p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-700/50 text-cyan-300 rounded text-xs border border-gray-600/50 group-hover:border-cyan-500/30 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Animated gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">🐍</div>
              <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Python</h4>
              <p className="text-sm text-gray-400">Programming</p>
            </div>
            <div className="group">
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">Machine Learning</h4>
              <p className="text-sm text-gray-400">AI & ML</p>
            </div>
            <div className="group">
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">Web Development</h4>
              <p className="text-sm text-gray-400">Full Stack</p>
            </div>
            <div className="group">
              <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">📊</div>
              <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors">Data Science</h4>
              <p className="text-sm text-gray-400">Analytics</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">Download my complete resume to learn more about my experience and skills</p>
            <a
              href="/images/resume.pdf"
              
              download
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
