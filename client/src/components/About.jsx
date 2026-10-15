import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personal } from '../data';
import { HiLocationMarker, HiCode, HiLightBulb } from 'react-icons/hi';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Shipped' },
  { value: '3', label: 'Teams Led' },
  { value: '50K+', label: 'Users Served' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            Passionate about{' '}
            <span className="text-teal-600">crafting</span> great software
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div>
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="space-y-5 text-slate-600 text-lg leading-relaxed"
            >
              {personal.about.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-teal-700 font-medium border-l-4 border-teal-400 pl-4 italic">
                {personal.goal}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="mt-10 flex flex-col gap-4"
            >
              {[
                { icon: HiLocationMarker, label: 'Location', value: personal.location },
                { icon: HiCode, label: 'Specialty', value: 'Full Stack Development (React · Node.js · MongoDB)' },
                { icon: HiLightBulb, label: 'Open to', value: 'Full-time · Contract · Consulting' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-teal-50/60 border border-teal-100">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{label}</p>
                    <p className="text-slate-700 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats + Values */}
          <div className="space-y-8">
            {/* Stats grid */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="group p-6 rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white hover:border-teal-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <p className="font-display text-4xl font-bold text-teal-600 mb-1">{value}</p>
                  <p className="text-sm text-slate-500 font-medium">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-6 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white"
            >
              <h3 className="font-display font-bold text-xl mb-4">What drives me</h3>
              <ul className="space-y-3 text-teal-100">
                {[
                  '🎯 Solving real problems with elegant engineering',
                  '🤝 Collaborating with cross-functional teams',
                  '📈 Continuous learning and knowledge sharing',
                  '🚀 Shipping products people love to use',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
