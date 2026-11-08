import React from 'react';
import { Cloud, GitBranch, Cpu, ShieldCheck, Server } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function StatsSection() {
  const iconMap = [Cloud, GitBranch, Cpu, ShieldCheck];

  return (
    <section className="py-8 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {resumeData.stats.map((stat, idx) => {
            const Icon = iconMap[idx] || Server;
            return (
              <div 
                key={stat.label}
                className="relative p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all group hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-400">{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
