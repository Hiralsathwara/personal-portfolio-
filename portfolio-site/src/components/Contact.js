import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hiralsathwara2006@gmail.com',
      href: 'mailto:hiralsathwara2006@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9979117384',
      href: 'tel:+919979117384',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

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
    }
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 py-12 sm:py-16 relative sm:rounded-2xl sm:m-2 lg:m-4"
      style={{
        background: 'linear-gradient(135deg, #1e1a2e 0%, #16213e 50%, #0f172a 100%)',
        borderRadius: '20px',
        margin: '0.5rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-16 h-16 sm:w-28 sm:h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-14 h-14 sm:w-24 sm:h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl sm:text-4xl mb-6 sm:mb-8 text-center">
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-3xl">
            Get in Touch
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-8 sm:mb-12 text-sm sm:text-lg max-w-2xl mx-auto px-2">
          Ready to collaborate? Let's discuss your next project or just have a chat about technology and innovation!
        </p>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-3 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={info.href}
                      className="flex items-center space-x-3 sm:space-x-4"
                      {...(info.href === '#' && { onClick: (e) => e.preventDefault() })}    
                    >
                      <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <info.icon />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-sm sm:text-base">
                          {info.label}
                        </h4>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-xs sm:text-base break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-8 border border-gray-700/50 h-full flex flex-col justify-center">
              <h4 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Connect With Me
              </h4>
              <p className="text-gray-300 mb-4 sm:mb-8 leading-relaxed text-xs sm:text-lg">
                Let's collaborate and build something amazing together!
                <br />
                <span className="text-purple-400">Always excited to work on innovative projects</span>
              </p>
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`group relative p-2 sm:p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg sm:rounded-2xl border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300 text-4xl sm:text-6xl" style={{width: 'clamp(1.5rem, 4vw, 1.5rem)', height: 'clamp(1.5rem, 4vw, 1.5rem)'}}>
                      {link.icon}
                    </div>
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        
        
      </div>
    </section>
  );
};

export default Contact;
