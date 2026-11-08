import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  ChevronRight 
} from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Interactive Demos', href: '#demos' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  CHANDAN<span className="text-cyan-400">.DEV</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                  READY
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono -mt-1 hidden sm:block">DevOps &bull; Cloud &bull; GenAI</p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </button>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              Hire Chandan
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-lg bg-slate-800 text-cyan-400 border border-slate-700"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              View & Print Resume
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm"
            >
              Contact Me
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
