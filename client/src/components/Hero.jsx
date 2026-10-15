import { motion } from 'framer-motion';
import { HiDownload, HiArrowRight } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personal } from '../data';

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-50/80 blur-3xl" />
        {/* Grid dots */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#0d9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Available for hire
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-teal-600">{personal.name.split(' ')[0]}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="absolute bottom-2 left-0 right-0 h-4 bg-teal-100 -z-10 rounded-sm origin-left"
              />
            </span>{' '}
            <span className="text-slate-800">{personal.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-teal-700 font-semibold mb-4"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-view-work-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-teal-200 hover:shadow-xl hover:-translate-y-1"
            >
              View My Work
              <HiArrowRight />
            </a>
            <a
              href={personal.resumeUrl}
              id="hero-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-full transition-all duration-200 hover:-translate-y-1"
              download
            >
              <HiDownload />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5 justify-center lg:justify-start"
          >
            <span className="text-sm text-slate-400 font-medium">Find me on</span>
            <div className="flex gap-4">
              {[
                { icon: FiGithub, href: personal.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personal.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personal.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-teal-200 text-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Avatar / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex-shrink-0"
        >
          <motion.div
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="relative"
          >
            {/* Outer ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 opacity-20 blur-xl" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Placeholder avatar — initials */}
              <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <span className="font-display text-7xl lg:text-8xl font-bold text-white/90 select-none">
                  {personal.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-6 top-8 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2 border border-teal-100"
            >
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Projects Done</p>
                <p className="font-bold text-slate-800">25+</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-6 bottom-8 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2 border border-teal-100"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-xs text-slate-400 font-medium">Years Exp</p>
                <p className="font-bold text-slate-800">4+</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-teal-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
