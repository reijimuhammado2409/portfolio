import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
        <nav
          className={`w-full rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 border ${
            isScrolled
              ? 'bg-[#0d0d0f]/90 backdrop-blur-md border-white/20 shadow-2xl shadow-black/90'
              : 'bg-[#0d0d0f]/75 backdrop-blur-md border-white/10 shadow-lg'
          }`}
        >
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="font-display text-base sm:text-lg font-bold tracking-tight text-[#f4f4f6] hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            <span>REIJI<span className="text-zinc-500 font-normal">.DEV</span></span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#a1a1aa]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#f4f4f6] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Available for Work Badge & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Work</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-full bg-[#f4f4f6] text-[#0d0d0f] hover:bg-white transition-all duration-300 hover:scale-[1.03]"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-1 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 w-full bg-[#141419]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Work
              </div>
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Menu</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#a1a1aa] hover:text-white transition-colors py-1 flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center text-sm font-semibold px-6 py-2.5 rounded-full bg-[#f4f4f6] text-[#0d0d0f] hover:bg-white transition-all"
            >
              Let's Talk
            </a>
          </div>
        )}
      </header>
    </>
  );
}
