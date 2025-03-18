import React, { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="relative z-50">
      <div className="px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl flex items-center gap-2">
          <img
            src="https://starbuckstech.com/icon2.png"
            alt="StarbucksTech Logo"
            className="w-8 h-8 object-contain"
          />
          <span>StarbucksTech</span>
        </div>
        {/* Hamburger menu button for mobile */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:block space-x-6">
          <a
            href="https://blog.starbuckstech.com/about"
            className="text-white hover:text-green-400 transition-colors"
            data-umami-event="About Button"
          >
            About
          </a>
          <a
            href="https://rxresu.me/me.starbuck/adam-starbuck"
            className="text-white hover:text-green-400 transition-colors"
            data-umami-event="Resume Button"
          >
            Resume
          </a>
          <a
            href="https://blog.starbuckstech.com"
            className="text-white hover:text-green-400 transition-colors"
            data-umami-event="Blog Button"
          >
            Blog
          </a>
        </div>

      </div>
      </div>

      {/* Mobile navigation menu */}
      <div 
        className={`lg:hidden absolute w-full transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col place-items-end py-4 space-y-4 mx-6">
            <a
              href="https://blog.starbuckstech.com/about"
              className="text-white hover:text-green-400 transition-colors"
              data-umami-event="About Button Mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://rxresu.me/me.starbuck/adam-starbuck"
              className="text-white hover:text-green-400 transition-colors"
              data-umami-event="Resume Button Mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
            <a
              href="https://blog.starbuckstech.com"
              className="text-white hover:text-green-400 transition-colors"
              data-umami-event="Blog Button Mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
          </div>
      </div>
    </nav>
  );
}