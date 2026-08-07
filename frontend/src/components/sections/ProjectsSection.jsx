import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, FolderGit2 } from 'lucide-react';
import { mockProjects, mockCategories } from '../../data/mockData';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? mockProjects
    : mockProjects.filter((project) => project.category.slug === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.25 } },
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header & Category Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          >
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#71717a] block mb-3">
              // FEATURED WORKS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6]">
              Selected Projects & Case Studies
            </h2>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.65, 0.05, 0, 1] }}
            className="flex flex-wrap gap-2"
          >
            {mockCategories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-[#f4f4f6] text-[#0d0d0f] shadow-lg shadow-white/5'
                      : 'bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Compact 3-Column Desktop Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-[#141419] border border-white/[0.08] rounded-2xl overflow-hidden p-5 sm:p-6 flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80"
              >
                <div>
                  {/* Project Image Container */}
                  <div className="overflow-hidden rounded-xl bg-neutral-900 mb-5 relative aspect-video">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Featured Badge Overlay */}
                    {project.is_featured && (
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0d0d0f]/80 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest font-semibold text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Category & Tech Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    <span className="text-[10px] text-zinc-300 font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {project.category.name}
                    </span>
                    {project.tech_stacks.map((tech) => (
                      <span
                        key={tech.name}
                        className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#f4f4f6] group-hover:text-white transition-colors mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed mb-5 line-clamp-3">
                    {project.short_description}
                  </p>
                </div>

                {/* External Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  {project.links.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.type === 'github' ? (
                        <GithubIcon className="w-3.5 h-3.5" />
                      ) : (
                        <ExternalLink className="w-3.5 h-3.5" />
                      )}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.65, 0.05, 0, 1] }}
          className="mt-14 text-center"
        >
          <a
            href="https://github.com/reijimuhammado2409"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white px-7 py-3 rounded-full hover:border-white/30 hover:bg-white/10 transition-all duration-300 font-semibold text-xs uppercase tracking-wider group"
          >
            <FolderGit2 className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span>Explore More Archives on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
