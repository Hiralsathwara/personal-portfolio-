import React, { useState } from 'react';
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaChartLine, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiPandas, SiNumpy, SiScikitlearn, SiMysql, SiExpress } from 'react-icons/si';

// Skill Categories with Icons
const skillCategories = [
  {
    title: 'Programming',
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'JavaScript', icon: FaJsSquare },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Data Science',
    items: [
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Matplotlib', icon: FaChartLine },
      { name: 'Scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: FaCode },
    ],
  },
];

// Education Data
const education = [
  {
    institution: 'SAL Engineering & Technical Institute (GTU)',
    degree: 'B.Tech in Information Technology',
    cgpa: '8.5',
    period: '2024 – 2027',
    icon: '🎓',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    institution: 'Government Girls Polytechnic, Ahmedabad (GTU)',
    degree: 'Diploma in Information Technology',
    cgpa: '9.5',
    period: '2021 – 2024',
    icon: '🎓',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const About = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (title) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #17233a 50%, #111827 100%)',
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute right-10 top-1/4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-16 w-16 sm:h-20 sm:w-20 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-3xl">
            About
          </span>
        </div>

        {/* Summary & Education Section */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr] items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-800/70 bg-slate-900/70 p-5 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-xl">
              <h3 className="text-lg sm:text-2xl font-semibold text-cyan-300 mb-3 sm:mb-4">Professional Summary</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-7 sm:leading-8">
                Aspiring Data Scientist and Software Developer with hands-on experience in Python, Machine Learning, Data Analysis, and Full-Stack Web Development through internships and academic projects. Developed intelligent applications, including Greenify, an emotion-based recommendation system, and AIVA, demonstrating strong problem-solving, analytical, and software development skills. Skilled in Python, Machine Learning techniques, data science, SQL, React.js, Node.js, and data-driven decision-making. Seeking to leverage technical expertise, analytical thinking, and innovation to contribute to impactful technology solutions while growing as a Data Science professional.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-800/70 bg-slate-900/70 p-5 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.4)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
                <h3 className="text-lg sm:text-2xl font-semibold text-cyan-300">Education</h3>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">Current</span>
              </div>
              <div className="space-y-4 sm:space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-800/70 bg-slate-950/70 p-4 sm:p-5 transition hover:-translate-y-1 hover:border-cyan-500/30"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-10 blur-3xl`} />
                    <div className="relative">
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{edu.icon}</div>
                      <h4 className="text-base sm:text-lg font-semibold text-white">{edu.institution}</h4>
                      <p className="text-cyan-300 mt-1 text-sm sm:text-base">{edu.degree}</p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2">{edu.period}</p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">CGPA: {edu.cgpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

