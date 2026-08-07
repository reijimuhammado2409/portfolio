import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className="min-h-screen bg-[#0d0d0f] text-[#f4f4f6] font-body selection:bg-white selection:text-black">
        
        {/* Floating Glassmorphism Navbar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

      </div>
    </ReactLenis>
  );
}

export default App;
