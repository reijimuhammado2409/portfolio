import { motion } from 'framer-motion';
import { Cpu, Terminal } from 'lucide-react';
import { mockTechStacks } from '../../data/mockData';

function FilamentIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#F59E0B" />
      <path d="M12 4.5L5.5 18H10L12 13.5L14 18H18.5L12 4.5Z" fill="#0D0D0F" />
    </svg>
  );
}

export default function SkillsSection() {
  // Enhanced tech stack list with level / category metadata for rich UI display
  const techSkills = mockTechStacks.map((tech) => {
    let category = 'Tool & Tech';
    let level = 'Advanced';

    if (['React.js', 'Tailwind CSS', 'JavaScript'].includes(tech.name)) {
      category = 'Frontend';
      level = 'Proficient';
    } else if (['Laravel', 'PHP', 'MySQL', 'Filament CMS'].includes(tech.name)) {
      category = 'Backend & CMS';
      level = 'Expert';
    } else if (['Flutter'].includes(tech.name)) {
      category = 'Mobile Dev';
      level = 'Proficient';
    } else if (['Firebase'].includes(tech.name)) {
      category = 'Cloud & BaaS';
      level = 'Proficient';
    } else if (['Git'].includes(tech.name)) {
      category = 'DevOps & Version';
      level = 'Advanced';
    }

    return {
      ...tech,
      category,
      level,
    };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.65, 0.05, 0, 1],
      },
    },
  };

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          >
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#71717a] block mb-3">
              // TECHNICAL STACK & TOOLING
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
              Skills & Core Technologies
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.65, 0.05, 0, 1] }}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Modern Web Stack</span>
          </motion.div>
        </div>

        {/* Responsive Skill Badges Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techSkills.map((tech) => (
            <motion.div
              key={tech.id}
              variants={cardVariants}
              className="group bg-[#141419] border border-white/[0.08] rounded-2xl p-5 flex flex-col items-center justify-between text-center transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                {tech.name === 'Filament CMS' ? (
                  <FilamentIcon className="w-6 h-6" />
                ) : tech.icon ? (
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                ) : (
                  <Terminal className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                )}
              </div>

              {/* Skill Name */}
              <h3 className="font-display text-sm font-bold text-[#f4f4f6] group-hover:text-white transition-colors tracking-wide mb-1">
                {tech.name}
              </h3>

              {/* Category / Level Badge */}
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
