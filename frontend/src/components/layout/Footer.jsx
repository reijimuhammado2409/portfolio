import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#0d0d0f] border-t border-white/[0.08] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-sm text-[#f4f4f6] tracking-tight">
            REIJI<span className="text-zinc-500 font-normal">.DEV</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <p className="text-xs text-[#71717a] font-normal">
            © {new Date().getFullYear()} Muhammad Fachri Fahrezy. All rights reserved.
          </p>
        </div>

        {/* Middle: Work Availability Status */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for New Projects</span>
        </div>

        {/* Right: Smooth Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors group"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#0d0d0f] transition-all">
            <ArrowUp className="w-4 h-4" />
          </div>
        </button>

      </div>
    </footer>
  );
}
