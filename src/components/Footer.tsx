import React from 'react';
import { Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pb-8">
      <div className="flex flex-col items-center gap-4">
        {/* <Coffee className="text-white w-12 h-12 opacity-90" /> */}
         <img 
            src="https://starbuckstech.com/icon2.png" 
            alt="StarbucksTech Logo" 
            className="w-12 h-12 opacity-90 object-contain"
          />
        <p className="text-white/80 text-sm">
          © {currentYear} StarbucksTech
        </p>
      </div>
    </footer>
  );
}