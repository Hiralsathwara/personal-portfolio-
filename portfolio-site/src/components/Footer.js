import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-slate-950/95 border-t border-slate-800/60 backdrop-blur-xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                © 2026 Hiral Sathwara. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
