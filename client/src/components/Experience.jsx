import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLocationMarker, HiBriefcase, HiCalendar, HiChevronDown } from 'react-icons/hi';
import { experience } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function ExperienceCard({ job, index, inView }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      custom={index + 1}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative pl-8 sm:pl-12"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-teal-100" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-white shadow-md" />

      <div
        className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
          expanded ? 'border-teal-300' : 'border-teal-100 hover:border-teal-200'
        }`}
      >
        {/* Header */}
        <button
          id={`exp-toggle-${index}`}
          className="w-full text-left p-6 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full uppercase tracking-wide">
                  {job.type}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{job.role}</h3>
              <p className="text-teal-600 font-semibold text-base">{job.company}</p>
              <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <HiCalendar className="text-teal-400" />
                  {job.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiLocationMarker className="text-teal-400" />
                  {job.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0 mt-1"
            >
              <HiChevronDown size={18} />
            </motion.div>
          </div>
          <p className="mt-3 text-slate-500 text-sm">{job.description}</p>
        </button>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-teal-50">
            <h4 className="font-semibold text-slate-700 mt-4 mb-3 flex items-center gap-2">
              <HiBriefcase className="text-teal-500" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Work History
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            My <span className="text-teal-600">experience</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            A track record of delivering impactful software across startups and growing teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experience.map((job, i) => (
            <ExperienceCard key={i} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
