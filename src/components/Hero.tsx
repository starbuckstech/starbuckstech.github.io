import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <main className="relative z-10 flex-grow flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-2xl text-white mb-12 leading-relaxed">
          <p className="mb-4">
            ACU Grad · Systems Administrator · MDM Expert · Jamf Certified Expert
          </p>
          <p className="mb-4">
            3D Printing Guru · Quadcopter Pilot · Husband · Dad
          </p>
          <p>Definitely related to the coffee</p>
        </div>
        <p className="text-lg text-gray-300 mb-8">Find me online here:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/adamstarbuck"
            className="text-white hover:text-blue-400 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="LinkedIn Button"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/starbuck93"
            className="text-white hover:text-purple-400 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Github Button"
          >
            <Github size={32} />
          </a>
        </div>
      </div>
    </main>
  );
}