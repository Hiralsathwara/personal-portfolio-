import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-14 sm:h-16">
        <div className="text-lg sm:text-xl font-bold cursor-pointer text-white" onClick={() => scrollToSection('hero')}>
          Hiral Sathwara
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-slate-300">
          <button onClick={() => scrollToSection('hero')} className="text-sm lg:text-base transition hover:text-cyan-300 focus:outline-none">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-sm lg:text-base transition hover:text-cyan-300 focus:outline-none">About me</button>
          <button onClick={() => scrollToSection('projects')} className="text-sm lg:text-base transition hover:text-cyan-300 focus:outline-none">Projects</button>
          <button onClick={() => scrollToSection('resume')} className="text-sm lg:text-base transition hover:text-cyan-300 focus:outline-none">Experience</button>
          <button onClick={() => scrollToSection('contact')} className="text-sm lg:text-base transition hover:text-cyan-300 focus:outline-none">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-slate-800/60 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2 flex flex-col text-slate-300">
            <button onClick={() => scrollToSection('hero')} className="text-left py-2 hover:text-cyan-300 transition text-sm">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-cyan-300 transition text-sm">About me</button>
            <button onClick={() => scrollToSection('projects')} className="text-left py-2 hover:text-cyan-300 transition text-sm">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="text-left py-2 hover:text-cyan-300 transition text-sm">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-cyan-300 transition text-sm">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
