import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { mockExperiences, mockEducations } from '../../data/mockData';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'work' | 'education'

  const workItems = mockExperiences.map((exp) => ({
    id: `exp-${exp.id}`,
    type: 'work',
    title: exp.position,
    subtitle: exp.company,
    period: `${exp.start_date.substring(0, 7)} — ${exp.end_date ? exp.end_date.substring(0, 7) : 'Present'}`,
    location: exp.location,
    badge: exp.employment_type,
    url: exp.company_url,
    description: exp.description,
    sort_order: exp.sort_order,
  }));

  const eduItems = mockEducations.map((edu) => ({
    id: `edu-${edu.id}`,
    type: 'education',
    title: `${edu.degree} in ${edu.major}`,
    subtitle: edu.institution,
    period: `${edu.start_date.substring(0, 7)} — ${edu.end_date ? edu.end_date.substring(0, 7) : 'Present'}`,
    location: `GPA: ${edu.gpa}`,
    badge: 'Education & Training',
    url: null,
    description: edu.description,
    sort_order: edu.sort_order,
  }));

  const allItems = [...workItems, ...eduItems].sort((a, b) => a.sort_order - b.sort_order);

  const displayedItems = activeTab === 'all'
    ? allItems
    : allItems.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Split 2-Column Grid Layout: Left (lg:col-span-4) & Right (lg:col-span-8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title & Filter Tabs (lg:col-span-4) */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          >
            <div>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#71717a] block mb-3">
                // CAREER & ACADEMICS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4f4f6] leading-[1.15] mb-4">
                Experience & Academic Journey
              </h2>
              <p className="text-sm text-[#71717a] font-normal leading-relaxed">
                A chronological timeline of my professional roles, client work, and intensive vocational education.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 w-fit">
              {[
                { id: 'all', label: 'All' },
                { id: 'work', label: 'Experience' },
                { id: 'education', label: 'Education' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#f4f4f6] text-[#0d0d0f] shadow-lg shadow-white/5'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Minimalist Vertical Timeline Cards (lg:col-span-8) */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-8 border-l border-white/10">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {displayedItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.08,
                      ease: [0.65, 0.05, 0, 1],
                    }}
                    className="relative group"
                  >
                    {/* Timeline Dot Node - Perfectly Aligned */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#0d0d0f] border-2 border-white/20 group-hover:border-white group-hover:bg-white transition-all duration-300 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Timeline Item Card Container */}
                    <div className="bg-[#141419] border border-white/[0.08] rounded-2xl p-5 sm:p-7 transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80">
                      
                      {/* Meta Info Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white transition-colors">
                            {item.type === 'work' ? (
                              <Briefcase className="w-4 h-4" />
                            ) : (
                              <GraduationCap className="w-4 h-4" />
                            )}
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                            {item.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span className="flex items-center gap-1 font-mono text-[11px]">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            {item.period}
                          </span>
                          {item.location && (
                            <span className="flex items-center gap-1 font-medium text-[11px]">
                              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                              {item.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Organization */}
                      <div className="mb-3">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#f4f4f6] group-hover:text-white transition-colors flex items-center gap-2">
                          <span>{item.title}</span>
                          {item.url && (
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-500 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </h3>
                        <h4 className="text-xs sm:text-sm font-semibold text-[#71717a] mt-0.5">
                          {item.subtitle}
                        </h4>
                      </div>

                      {/* Description Paragraph */}
                      <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
