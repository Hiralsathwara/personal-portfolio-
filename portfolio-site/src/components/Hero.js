import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 pt-16 sm:pt-28 pb-12 sm:pb-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569, #1e293b, #0f172a)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease-in-out infinite'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-teal-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl relative z-10 w-full">
        <div className="mb-6 sm:mb-8 relative">
          {/* Glow effect behind profile image */}
          <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-full mx-auto bg-gradient-to-r from-cyan-400/15 to-purple-400/15 blur-xl -z-10 animate-pulse"></div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 relative">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Hiral Sathwara
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-lg -z-10"></div>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-light leading-relaxed">
          B.Tech IT Student | Python Developer | AI/ML Enthusiast
        </p>
        

        <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 italic font-medium">
          <span className="text-purple-400">"</span>
          Turning Data into Insights | Building Smart Web Solutions
          <span className="text-purple-400">"</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
          <a
            href="/images/resume.pdf"
            download
            className="group relative inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-5 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </a>

          <button
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-5 sm:px-8 py-2 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg sm:rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradientShift {
          animation: gradientShift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
