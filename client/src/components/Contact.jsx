import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin, FiClock } from 'react-icons/fi';
import { personal } from '../data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    desc: 'Best for detailed inquiries',
    id: 'contact-email-link',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/alexjohnson',
    href: personal.linkedin,
    desc: 'Connect professionally',
    id: 'contact-linkedin-link',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/alexjohnson',
    href: personal.github,
    desc: 'Explore my open source work',
    id: 'contact-github-link',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        // Server returned a validation or logic error
        setStatus('error');
        console.error('Submission error:', data.message);
      }
    } catch (err) {
      // Network / server unreachable
      setStatus('error');
      console.error('Network error:', err.message);
    }
  };

  return (
    <section id="contact" className="py-28 bg-white">
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
            Let's <span className="text-teal-600">work together</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact info */}
          <div className="space-y-6">
            {/* Availability card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="p-6 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-lg">Currently available</span>
              </div>
              <p className="text-teal-100 text-sm leading-relaxed">
                I'm open to full-time roles, freelance contracts, and consulting engagements.
                Let's discuss how I can help your team ship great software.
              </p>
              <div className="mt-5 flex flex-col gap-2 text-sm text-teal-100">
                <span className="flex items-center gap-2">
                  <FiMapPin size={14} /> {personal.location}
                </span>
                <span className="flex items-center gap-2">
                  <FiClock size={14} /> Responds within 24 hours
                </span>
              </div>
            </motion.div>

            {/* Contact links */}
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                custom={i + 2}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                href={link.href}
                id={link.id}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 rounded-2xl border border-teal-100 bg-teal-50/30 hover:border-teal-400 hover:bg-teal-50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-teal-600 border border-teal-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600 transition-all duration-300 shadow-sm">
                  <link.icon size={22} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{link.label}</p>
                  <p className="font-semibold text-slate-800 text-sm">{link.value}</p>
                  <p className="text-xs text-slate-400">{link.desc}</p>
                </div>
                <FiSend size={16} className="text-teal-400 group-hover:text-teal-600 transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Right — Contact form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="bg-white rounded-2xl border border-teal-100 shadow-sm p-8"
          >
            {status === 'sent' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-6 text-4xl">
                  ✉️
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message sent!</h3>
                <p className="text-slate-500">Your message was saved successfully. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : status === 'error' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-6 text-4xl">
                  ⚠️
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Something went wrong</h3>
                <p className="text-slate-500">Could not send your message. Please check the server or try again.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Send me a message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Your name <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email address <span className="text-teal-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-700 mb-2">
                    Subject <span className="text-teal-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Project collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-teal-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 transition-all resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold rounded-xl transition-all duration-200 shadow-md hover:shadow-teal-200 hover:shadow-lg"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
