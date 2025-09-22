import React from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hiral-sathwara-873561269/',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        xmlns="https://www.linkedin.com/in/hiral-sathwara-873561269/"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4-2.4-4s-2.8 1.9-2.8 3.9V24h-5V8z" />
      </svg>
    ),
    color: 'hover:text-blue-400',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Hiralsathwara',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        xmlns="https://github.com/Hiralsathwara"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: 'hover:text-gray-300',
    gradient: 'from-gray-600 to-gray-400'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 002.163-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.779-.023-1.158-.067a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633a9.936 9.936 0 002.457-2.548l-.047-.02z" />
      </svg>
    ),
    color: 'hover:text-sky-400',
    gradient: 'from-sky-500 to-blue-400'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/',
    icon: (
      <svg
        fill="currentColor"
        stroke="none"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-3a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    ),
    color: 'hover:text-pink-400',
    gradient: 'from-pink-500 to-purple-500'
  },
];

const Footer = () => {

  return (
    <footer
      className="relative mt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hiral Sathwara
                </span>
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                B.Tech IT Student | Python Developer | AI/ML Enthusiast
                <br />
                <span className="text-cyan-400">Building innovative solutions with modern technologies</span>
              </p>
              <div className="flex justify-center lg:justify-start items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-sm text-gray-400">Remote Work</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-sm text-gray-400">Full-time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 h-full">
              <h4 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Connect With Me
              </h4>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Let's collaborate and build something amazing together!
                <br />
                <span className="text-purple-400">Always excited to work on innovative projects</span>
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`group relative p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-2xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">4+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors">10+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="group">
              <div className="text-2xl font-bold text-green-400 group-hover:text-green-300 transition-colors">3+</div>
              <div className="text-sm text-gray-400">Hackathons</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Hiral Sathwara. Crafted with ❤️ and lots of ☕
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-500">Made with React & TailwindCSS</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
