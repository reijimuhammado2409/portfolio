import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { mockLandingPageData } from '../../data/mockData';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function ContactSection() {
  const { site_settings } = mockLandingPageData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0d0d0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#71717a] block mb-3">
            // GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-[#f4f4f6] mb-6">
            LET'S WORK TOGETHER.
          </h2>
          <p className="text-base sm:text-lg text-[#71717a] font-normal leading-relaxed">
            Have a project in mind, a potential collaboration, or just want to say hi? Feel free to reach out directly or send a message below.
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Info & Social Cards (lg:col-span-5) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
          >
            {/* Direct Contact Info Glass Card */}
            <div className="bg-[#141419] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-[#f4f4f6] mb-2">
                Contact Information
              </h3>
              
              <a
                href={`mailto:${site_settings.email}`}
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Email Me</span>
                  <span className="text-sm font-medium text-[#f4f4f6]">{site_settings.email}</span>
                </div>
              </a>

              <a
                href={`tel:${site_settings.phone}`}
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Phone / WhatsApp</span>
                  <span className="text-sm font-medium text-[#f4f4f6]">{site_settings.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-medium text-[#f4f4f6]">{site_settings.address}</span>
                </div>
              </div>
            </div>

            {/* Social Link Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={site_settings.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141419] border border-white/[0.08] rounded-2xl p-5 flex items-center justify-between hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold text-[#f4f4f6]">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={site_settings.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141419] border border-white/[0.08] rounded-2xl p-5 flex items-center justify-between hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold text-[#f4f4f6]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form UI (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 bg-[#141419] border border-white/[0.08] rounded-2xl p-6 sm:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUpVariant}
          >
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 animate-bounce" />
                <h3 className="font-display text-2xl font-bold text-[#f4f4f6]">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#71717a] max-w-md">
                  Thank you for reaching out. Your message has been stored, and I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#f4f4f6] placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#f4f4f6] placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#f4f4f6] placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[#f4f4f6] placeholder-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f4f4f6] text-[#0d0d0f] font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
