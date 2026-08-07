import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import { mockLandingPageData } from './data/mockData';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-[#0d0d0f] text-[#f4f4f6] font-body selection:bg-white selection:text-black pt-28">
        
        {/* Floating Glassmorphism Navbar */}
        <Navbar />

        {/* Hero Section Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-32 flex flex-col items-center justify-center text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sprint 3 — Floating Navbar Active
          </span>
          
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#f4f4f6] max-w-4xl">
            {mockLandingPageData.hero.headline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#71717a] max-w-2xl font-normal leading-relaxed">
            {mockLandingPageData.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="bg-[#f4f4f6] text-[#0d0d0f] font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.03]"
            >
              {mockLandingPageData.hero.primary_button_text}
            </a>
            <a
              href="#contact"
              className="border border-white/10 bg-white/5 text-white px-8 py-3.5 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              {mockLandingPageData.hero.secondary_button_text}
            </a>
          </div>
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
