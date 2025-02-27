import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/big-bg.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <Navigation />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
