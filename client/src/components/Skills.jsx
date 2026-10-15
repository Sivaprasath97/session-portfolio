import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCode, FiServer, FiDatabase, FiTool
} from 'react-icons/fi';
import { skills } from '../data';

const categoryIcons = [FiCode, FiServer, FiDatabase, FiTool];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

function SkillBar({ name, level, index, inView }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-700 transition-colors">
          {name}
        </span>
        <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-teal-50 rounded-full overflow-hidden border border-teal-100">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-28 bg-gradient-to-b from-teal-50/50 to-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Technical Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            My <span className="text-teal-600">toolbox</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            A curated set of technologies I use to build production-grade web applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat, catIndex) => {
            const Icon = categoryIcons[catIndex] || FiCode;
            return (
              <motion.div
                key={cat.category}
                custom={catIndex + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-slate-800">{cat.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {cat.items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={catIndex * cat.items.length + i}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {[
            'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
            'Redis', 'Docker', 'AWS', 'Git', 'REST APIs', 'GraphQL',
            'Next.js', 'Jest', 'Tailwind CSS', 'Vite',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white border border-teal-100 text-slate-600 text-sm font-medium rounded-full hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50 transition-all duration-200 cursor-default shadow-sm"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
