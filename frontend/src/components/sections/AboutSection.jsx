import { motion } from 'framer-motion';
import { Award, Code2, Rocket, Users } from 'lucide-react';
import { mockLandingPageData } from '../../data/mockData';

export default function AboutSection() {
  const { about } = mockLandingPageData;

  const stats = [
    {
      id: 1,
      value: '3+',
      label: 'Years Experience',
      icon: Award,
      description: 'Building full stack web apps',
    },
    {
      id: 2,
      value: '15+',
      label: 'Projects Delivered',
      icon: Code2,
      description: 'Production & client solutions',
    },
    {
      id: 3,
      value: '100%',
      label: 'Code Quality',
      icon: Rocket,
      description: 'Clean architecture & testing',
    },
    {
      id: 4,
      value: '24/7',
      label: 'High Availability',
      icon: Users,
      description: 'Scalable backend API design',
    },
  ];

  const fadeUpVariant = {
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
    <section id="about" className="relative py-28 sm:py-36 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Narrative & Bio (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
          >
            <div>
              {/* Section Subhead Tag */}
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#71717a] block mb-4">
                // ABOUT ME
              </span>

              {/* Main Headline */}
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#f4f4f6] leading-[1.15] mb-8">
                {about.title}
              </h2>

              {/* Narrative Text */}
              <p className="text-base sm:text-lg text-[#71717a] font-normal leading-relaxed mb-6">
                {about.description}
              </p>

              <p className="text-base sm:text-lg text-[#71717a] font-normal leading-relaxed">
                I focus heavily on code quality, speed optimization, and maintaining clean architectural principles. Whether building RESTful APIs with Laravel 12 or crafting responsive editorial user interfaces with React and Tailwind CSS, I treat every detail with care.
              </p>
            </div>

            {/* Key Strengths Pills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Full-Stack Architecture', 'Editorial UI Design', 'RESTful API v1', 'Performance First'].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/5 border border-white/10 text-xs text-zinc-300 px-3.5 py-1.5 rounded-full font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stat Cards Grid (lg:col-span-5) */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.id}
                  variants={fadeUpVariant}
                  className="bg-[#141419] border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#f4f4f6] tracking-tight group-hover:text-white transition-colors">
                      {stat.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-[#f4f4f6] mb-1 tracking-wide">
                    {stat.label}
                  </h3>
                  
                  <p className="text-xs text-[#71717a] font-normal leading-normal">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
