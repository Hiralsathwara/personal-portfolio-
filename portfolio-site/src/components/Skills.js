import React, { useState } from 'react';
import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
  FaLinux,
  FaDocker,
  FaCog,
  FaLine,
  FaChartPie,
  FaChartBar,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiJest,
  SiPostman,
} from 'react-icons/si';

const skillsData = {
  'Machine Learning': [
    { name: 'Supervised Learning', icon: FaCog },
    { name: 'Unsupervised Learning', icon: FaCog },
    { name: 'Deep Learning', icon: SiTensorflow },
    { name: 'Recommendation Systems', icon: FaCog },
    { name: 'Neural Networks', icon: SiPytorch },
    { name: 'Model Training', icon: SiKeras },
    { name: 'Data Preprocessing', icon: FaDatabase },
    
  ],
  'AI Frameworks': [
    { name: 'TensorFlow', icon: SiTensorflow },
    {name:'pandas',icon:SiPandas},
    {name:'numpy',icon:SiNumpy},  
    {name:'seaborn',icon:SiPandas},
    { name: 'matplotlib', icon:FaChartPie },
    
    // { name: 'PyTorch', icon: SiPytorch },
    // { name: 'Keras', icon: SiKeras },
    { name: 'Scikit-learn', icon: FaCog },
  ],

  // 'Generative AI': [
  //   { name: 'LLMs', icon: SiPytorch },
  //   { name: 'RAG Systems', icon: SiTensorflow },
  //   { name: 'Prompt Engineering', icon: FaCode },
  //   { name: 'Fine-tuning', icon: SiKeras },
  // ],

  'Web Development': [
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    // { name: 'Express', icon: SiExpress },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
  ],
  'Programming': [
    { name: 'Python', icon: FaPython },
    { name: 'JavaScript', icon: FaJsSquare },
  ],
  'Data Structures & Algorithms': [
    { name: 'Arrays & Lists', icon: FaDatabase },
    { name: 'Trees & Graphs', icon: FaDatabase },
    { name: 'Sorting', icon: FaDatabase },
    { name: 'Searching', icon: FaDatabase },
  ],
  'Databases': [
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    // { name: 'PostgreSQL', icon: SiPostgresql },
  ],
  // 'Cloud & DevOps': [
  //   { name: 'Docker', icon: FaDocker },
  //   { name: 'AWS', icon: FaLinux },
  //   { name: 'CI/CD', icon: FaLinux },
  // ],
  'Version Control': [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
  ],
  // 'Automation & Testing': [
  //   { name: 'Jest', icon: SiJest },
  //   { name: 'Postman', icon: SiPostman },
  //   { name: 'Pytest', icon: FaPython },
  // ],
  'Visualization': [
    { name: 'Matplotlib', icon: FaPython },
    { name: 'Seaborn', icon: SiPandas },
    { name: 'Plotly', icon: FaChartPie },
    { name: 'Tableau', icon: FaChartLine },
    { name: 'Power BI', icon: FaChartBar },
  ],
  'Operating Systems': [
    { name: 'Windows', icon: FaLinux },
    
  ],
};

const categories = Object.keys(skillsData);

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      id="technical-skills"
      className="relative overflow-hidden px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #17233a 50%, #111827 100%)',
      }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div className="absolute right-10 top-1/4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-1/2 bottom-10 h-16 w-16 sm:h-28 sm:w-28 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          {/* <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 sm:text-4xl font-bold">Skills</p> */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-3xl">
            Skills
          </span>
          {/* <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Technical Skills</h2> */}
          
        </div>

        {/* Category Tabs */}
        <div className="mb-8 sm:mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 sm:gap-3 pb-3 sm:pb-4 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full whitespace-nowrap font-semibold text-xs sm:text-sm transition duration-300 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.25)]'
                    : 'bg-slate-800/50 text-slate-300 hover:text-cyan-300 hover:bg-slate-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 animate-fadeIn">
          {skillsData[activeTab].map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-lg sm:rounded-2xl border border-slate-800/70 bg-slate-900/70 p-3 sm:p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_25px_80px_rgba(34,197,94,0.15)]"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Icon Container */}
                <div className="mx-auto mb-2 sm:mb-4 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg sm:rounded-2xl bg-slate-950/80 text-cyan-300 shadow-[0_10px_30px_rgba(34,197,94,0.15)] transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>

                {/* Skill Name */}
                <p className="relative text-xs sm:text-base font-semibold text-slate-100 group-hover:text-cyan-300 transition duration-300">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for animations and scrollbar hide */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TechnicalSkills;
