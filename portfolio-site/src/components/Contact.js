import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    try {
      // Use environment variable for API URL, fallback to localhost for development
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Success
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Backend error
        setStatus(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Network Error:', error);

      // More specific error messages
      if (error.message.includes('Failed to fetch')) {
        setStatus('Cannot connect to server. Make sure your backend server is running on port 5000.');
      } else {
        setStatus('Failed to send message. Please check your internet connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hiralsathwara2006@gmail.com',
      href: 'mailto:hiralsathwara2006@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9979117384',
      href: 'tel:+91XXXXXXXXX',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      href: '#',
      gradient: 'from-purple-500 to-pink-500'
    },
    // {
    //   icon: '💼',
    //   label: 'LinkedIn',
    //   value: 'Hiral Sathwara',
    //   href: 'https://linkedin.com/in/hiralsathwara-873561269',
    //   gradient: 'from-blue-600 to-blue-400'
    // }
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 py-16 relative"
      style={{
        background: 'linear-gradient(135deg, #1e1a2e 0%, #16213e 50%, #0f172a 100%)',
        borderRadius: '20px',
        margin: '2rem',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden rounded-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>

        <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Ready to collaborate? Let's discuss your next project or just have a chat about technology and innovation!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={info.href}
                      className="flex items-center space-x-4"
                      {...(info.href === '#' && { onClick: (e) => e.preventDefault() })}
                    >
                      <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">🚀 Availability</h4>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Available for freelance projects and collaborations</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block mb-2 font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block mb-2 font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block mb-2 font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>📤</span>
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                </button>
              </form>
              {status && (
                <div className="mt-4 p-4 rounded-lg bg-gray-700/50 border border-gray-600/50">
                  <p className="text-center text-gray-300">{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 inline-block">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Whether you have a project in mind or just want to connect, I'm always excited to hear from fellow developers and innovators.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/hiral-sathwara-873561269/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://github.com/Hiralsathwara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
