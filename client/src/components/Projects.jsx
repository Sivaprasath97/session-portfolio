import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi';
import { projects } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const categories = ['All', ...new Set(projects.map((p) => p.category))];

// Color gradients for project cards
const cardGradients = [
  'from-teal-500 to-emerald-600',
  'from-cyan-500 to-teal-600',
  'from-teal-600 to-cyan-700',
  'from-emerald-500 to-teal-600',
];

function ProjectCard({ project, index, inView }) {
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <motion.div
      custom={index + 1}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group bg-white rounded-2xl border border-teal-100 shadow-sm hover:shadow-xl hover:border-teal-300 hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Card header / preview */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id={`grid-${project.id}`} x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
          </svg>
        </div>

        {/* Project title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <p className="font-display text-2xl font-bold opacity-90">
              {project.title.split(' — ')[0]}
            </p>
            {project.stats && (
              <p className="text-white/70 text-sm mt-2">{project.stats}</p>
            )}
          </div>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30">
            <FiStar size={12} />
            Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
          {project.category}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-live-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-11 h-11 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="Live demo"
          >
            <FiExternalLink size={18} />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-repo-${project.id}`}
            onClick={(e) => e.stopPropagation()}
            className="w-11 h-11 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            aria-label="GitHub repo"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="font-display font-bold text-slate-900 text-lg mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-100"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-100">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action links */}
        <div className="flex gap-3 pt-4 border-t border-slate-100">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-teal-200 text-teal-700 hover:bg-teal-50 text-sm font-semibold rounded-xl transition-colors"
          >
            <FiGithub size={14} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-teal-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            Featured <span className="text-teal-600">projects</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            A selection of real-world applications I've built — from SaaS platforms to developer tools.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          custom={0.5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white border border-teal-200 text-slate-600 hover:border-teal-400 hover:text-teal-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/alexjohnson`}
            target="_blank"
            rel="noopener noreferrer"
            id="view-all-github-btn"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white font-semibold rounded-full transition-all duration-200"
          >
            <FiGithub />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
