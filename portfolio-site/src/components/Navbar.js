import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
          Hiral Sathwara
        </div>
        <div className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('hero')} className="hover:text-blue-500 focus:outline-none">Home</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 focus:outline-none">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 focus:outline-none">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
