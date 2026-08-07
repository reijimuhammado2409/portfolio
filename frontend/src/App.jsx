import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

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

        {/* Tech Stack & Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Experience & Education Section */}
        <ExperienceSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer Section */}
        <Footer />

      </div>
    </ReactLenis>
  );
}

export default App;
