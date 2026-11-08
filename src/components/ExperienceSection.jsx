import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building, Terminal } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering robust system operations, high-availability production support, and intelligent AI backend engineering.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {resumeData.experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all"></div>

              {/* Date Stamp on the Left (for desktop) */}
              <div className="md:absolute md:-left-36 md:top-1.5 md:w-28 md:text-right hidden md:block">
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  {exp.period}
                </span>
                <span className="block text-[11px] font-mono text-slate-500 mt-0.5">
                  {exp.type}
                </span>
              </div>

              {/* Main Card */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-8 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-cyan-500/5">
                
                {/* Mobile Period Badge */}
                <div className="flex md:hidden items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-medium border border-cyan-500/20">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {exp.type}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                      <Building className="w-4 h-4 text-cyan-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {exp.status === 'Current' && (
                    <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Present Role
                    </span>
                  )}
                </div>

                {/* Project Tagline if available */}
                {exp.project && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-400 font-sans">Project:</span> {exp.project}
                  </div>
                )}

                {/* Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {exp.summary}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
