import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personal } from '../data';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl text-white mb-3">
              AJ<span className="text-teal-400">.</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {personal.title} based in {personal.location}. Building products that make a difference.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-slate-300 mb-4 text-sm uppercase tracking-wide">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-slate-300 mb-4 text-sm uppercase tracking-wide">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiMail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: FiLinkedin, label: 'LinkedIn', href: personal.linkedin },
                { icon: FiGithub, label: 'GitHub', href: personal.github },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm hover:text-teal-400 transition-colors group"
                >
                  <Icon size={16} className="text-teal-500 group-hover:scale-110 transition-transform" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <FiHeart className="text-teal-500 fill-teal-500" size={14} /> using React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
