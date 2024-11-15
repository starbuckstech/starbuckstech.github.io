import React from 'react';

export function Navigation() {
  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl flex items-center gap-2">
          <img 
            src="https://starbuckstech.com/icon2.png" 
            alt="StarbucksTech Logo" 
            className="w-8 h-8 object-contain"
          />
          <span>StarbucksTech</span>
        </div>
        <div className="space-x-6">
          <a 
            href="https://rxresu.me/me.starbuck/adam-starbuck" 
            className="text-white hover:text-green-400 transition-colors"
          >
            Resume
          </a>
          <a 
            href="https://blog.starbuckstech.com" 
            className="text-white hover:text-green-400 transition-colors"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}