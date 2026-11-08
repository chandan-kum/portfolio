import React from 'react';
import { Terminal, ArrowUp, ShieldCheck, Mail, Phone, Globe } from 'lucide-react';
import { Linkedin } from './Icons';
import { resumeData } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                <Terminal className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                CHANDAN<span className="text-cyan-400">.DEV</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              DevOps & Cloud Engineer specializing in AWS, GCP, Kubernetes, GitOps, and Generative AI systems.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={resumeData.personal.portfolio}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800"
                title="Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${resumeData.personal.rawPhone}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About & Status</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">DevOps & AI Projects</a></li>
              <li><a href="#demos" className="hover:text-cyan-400 transition-colors">Live Architecture Visualizer</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Certifications</a></li>
            </ul>
          </div>

          {/* Declaration Box */}
          <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              RESUME AUTHENTICITY DECLARATION
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              "{resumeData.personal.declaration}"
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-[11px] text-cyan-400 hover:underline font-semibold cursor-pointer"
              >
                View Full Formatted Resume &rarr;
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} Chandan Kumar. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors border border-slate-800 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
