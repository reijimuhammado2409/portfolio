import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { mockLandingPageData } from '../../data/mockData';

export default function HeroSection() {
  const { hero } = mockLandingPageData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.65, 0.05, 0, 1],
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Tag */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#71717a] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Full Stack Engineer & UI Designer</span>
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#f4f4f6] max-w-5xl"
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline & Bio */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-lg sm:text-xl text-[#71717a] max-w-2xl font-normal leading-relaxed"
        >
          {hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.primary_button_url}
            className="inline-flex items-center gap-2 bg-[#f4f4f6] text-[#0d0d0f] font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-white/5"
          >
            <span>{hero.primary_button_text}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          
          <a
            href={hero.secondary_button_url}
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white px-8 py-3.5 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            <span>{hero.secondary_button_text}</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
